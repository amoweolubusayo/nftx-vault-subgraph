import { BigInt } from "@graphprotocol/graph-ts"
import {
  Vault,
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
  VaultInit
} from "../generated/Vault/Vault"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allValidNFTs(...)
  // - contract.allowAllItems(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.assetAddress(...)
  // - contract.balanceOf(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.deployEligibilityStorage(...)
  // - contract.eligibilityStorage(...)
  // - contract.enableMint(...)
  // - contract.enableRandomRedeem(...)
  // - contract.enableTargetRedeem(...)
  // - contract.flashFee(...)
  // - contract.flashLoan(...)
  // - contract.increaseAllowance(...)
  // - contract.is1155(...)
  // - contract.manager(...)
  // - contract.maxFlashLoan(...)
  // - contract.mint(...)
  // - contract.mintFee(...)
  // - contract.mintTo(...)
  // - contract.name(...)
  // - contract.nftIdAt(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.onERC721Received(...)
  // - contract.owner(...)
  // - contract.randomRedeemFee(...)
  // - contract.redeem(...)
  // - contract.redeemTo(...)
  // - contract.supportsInterface(...)
  // - contract.swap(...)
  // - contract.swapTo(...)
  // - contract.symbol(...)
  // - contract.targetRedeemFee(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.vaultFactory(...)
  // - contract.vaultId(...)
}

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

export function handleVaultInit(event: VaultInit): void {}
