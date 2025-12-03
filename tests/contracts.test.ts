import { contracts } from "../src/index";
import { ContractSchema } from "./schemas";

describe("Contracts", () => {
  it("should have a length greater than or equal to 0", () => {
    expect(contracts.length).toBeGreaterThanOrEqual(0);
  });

  it("should have a length less than 1000000", () => {
    expect(contracts.length).toBeLessThan(1000000);
  });

  it("should match the ContractSchema", () => {
    contracts.forEach((contract) => {
      try {
        ContractSchema.parse(contract);
      } catch (e) {
        throw new Error(
          `Contract does not match the schema (${contract.address}): ${e}`,
        );
      }
    });
  });

  it("should have non-empty names", () => {
    const invalidContracts = contracts.filter(
      (contract) => !contract.name || contract.name.trim().length === 0,
    );

    if (invalidContracts.length > 0) {
      throw new Error(
        `Found contracts with empty names: ${invalidContracts
          .map((c) => c.address)
          .join(", ")}`,
      );
    }
  });

  it("should have non-empty addresses", () => {
    const invalidContracts = contracts.filter(
      (contract) => !contract.address || contract.address.trim().length === 0,
    );

    if (invalidContracts.length > 0) {
      throw new Error(
        `Found contracts with empty addresses: ${invalidContracts.length} contracts`,
      );
    }
  });

  it("should have valid serviceId references", () => {
    const invalidContracts = contracts.filter(
      (contract) =>
        !contract.serviceId || contract.serviceId.trim().length === 0,
    );

    if (invalidContracts.length > 0) {
      throw new Error(
        `Found contracts with invalid serviceId: ${invalidContracts
          .map((c) => c.address)
          .join(", ")}`,
      );
    }
  });

  it("should have valid platformId references", () => {
    const invalidContracts = contracts.filter(
      (contract) =>
        !contract.platformId || contract.platformId.trim().length === 0,
    );

    if (invalidContracts.length > 0) {
      throw new Error(
        `Found contracts with invalid platformId: ${invalidContracts
          .map((c) => c.address)
          .join(", ")}`,
      );
    }
  });

  it("should have valid networkId references", () => {
    const invalidContracts = contracts.filter(
      (contract) =>
        !contract.networkId || contract.networkId.trim().length === 0,
    );

    if (invalidContracts.length > 0) {
      throw new Error(
        `Found contracts with invalid networkId: ${invalidContracts
          .map((c) => c.address)
          .join(", ")}`,
      );
    }
  });

  it("should not have duplicate contracts (same address, service, and network)", () => {
    const contractKeys = contracts.map(
      (contract) =>
        `${contract.address}-${contract.serviceId}-${contract.networkId}`,
    );
    const duplicates = contractKeys.filter(
      (key, index) => contractKeys.indexOf(key) !== index,
    );

    if (duplicates.length > 0) {
      throw new Error(`Found duplicate contracts: ${duplicates.join(", ")}`);
    }
  });

  // it("should have id formatted as networkId-address", () => {
  //   const invalidContracts = contracts.filter(
  //     (contract) => contract.id !== `${contract.networkId}-${contract.address}`,
  //   );

  //   if (invalidContracts.length > 0) {
  //     throw new Error(
  //       `Found contracts with invalid id format: ${invalidContracts
  //         .map((c) => `${c.id} (expected: ${c.networkId}-${c.address})`)
  //         .join(", ")}`,
  //     );
  //   }
  // });

  // it("should not have duplicate ids", () => {
  //   const ids = contracts.map((contract) => contract.id);
  //   const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  //   if (duplicates.length > 0) {
  //     throw new Error(
  //       `Found duplicate contract ids: ${duplicates.join(", ")}`,
  //     );
  //   }
  // });
});
