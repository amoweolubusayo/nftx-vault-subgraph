import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  Approval,
  EligibilityDeployed,
  EnableMintUpdated,
  EnableRandomRedeemUpdated,
  EnableTargetRedeemUpdated,
  ManagerSet,
  MintFeeUpdated,
  Minted,
  OwnershipTransferred,
  RandomRedeemFeeUpdated,
  Redeemed,
  Swapped,
  TargetRedeemFeeUpdated,
  Transfer,
  VaultInit,
} from "../generated/Vault/Vault";
import { Vault } from "../generated/schema";
import { getVault } from "../util/vaulthelper";

export function handleApproval(event: Approval): void {}

export function handleEligibilityDeployed(event: EligibilityDeployed): void {}
export function handleEnableMintUpdated(event: EnableMintUpdated): void {}

export function handleEnableRandomRedeemUpdated(
  event: EnableRandomRedeemUpdated
): void {}

export function handleEnableTargetRedeemUpdated(
  event: EnableTargetRedeemUpdated
): void {}

export function handleManagerSet(event: ManagerSet): void {}

export function handleMintFeeUpdated(event: MintFeeUpdated): void {}

export function handleMinted(event: Minted): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRandomRedeemFeeUpdated(
  event: RandomRedeemFeeUpdated
): void {}

export function handleRedeemed(event: Redeemed): void {}

export function handleSwapped(event: Swapped): void {}

export function handleTargetRedeemFeeUpdated(
  event: TargetRedeemFeeUpdated
): void {}

export function handleTransfer(event: Transfer): void {}

export function handleVaultInit(event: VaultInit): void {
  let vault = getVault(event.address);
  if (
    event.params.assetAddress ==
    Address.fromString("0x0000000000000000000000000000000000000000")
  ) {
    vault.vaultId,
      vault.symbol,
      vault.name,
      vault.allHoldings,
      vault.totalHoldings,
      vault.is1155;
  }
}
