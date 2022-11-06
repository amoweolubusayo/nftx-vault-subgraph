import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
  VaultInit
} from "../generated/Vault/Vault"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createEligibilityDeployedEvent(
  moduleIndex: BigInt,
  eligibilityAddr: Address
): EligibilityDeployed {
  let eligibilityDeployedEvent = changetype<EligibilityDeployed>(newMockEvent())

  eligibilityDeployedEvent.parameters = new Array()

  eligibilityDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "moduleIndex",
      ethereum.Value.fromUnsignedBigInt(moduleIndex)
    )
  )
  eligibilityDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "eligibilityAddr",
      ethereum.Value.fromAddress(eligibilityAddr)
    )
  )

  return eligibilityDeployedEvent
}

export function createEnableMintUpdatedEvent(
  enabled: boolean
): EnableMintUpdated {
  let enableMintUpdatedEvent = changetype<EnableMintUpdated>(newMockEvent())

  enableMintUpdatedEvent.parameters = new Array()

  enableMintUpdatedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return enableMintUpdatedEvent
}

export function createEnableRandomRedeemUpdatedEvent(
  enabled: boolean
): EnableRandomRedeemUpdated {
  let enableRandomRedeemUpdatedEvent = changetype<EnableRandomRedeemUpdated>(
    newMockEvent()
  )

  enableRandomRedeemUpdatedEvent.parameters = new Array()

  enableRandomRedeemUpdatedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return enableRandomRedeemUpdatedEvent
}

export function createEnableTargetRedeemUpdatedEvent(
  enabled: boolean
): EnableTargetRedeemUpdated {
  let enableTargetRedeemUpdatedEvent = changetype<EnableTargetRedeemUpdated>(
    newMockEvent()
  )

  enableTargetRedeemUpdatedEvent.parameters = new Array()

  enableTargetRedeemUpdatedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return enableTargetRedeemUpdatedEvent
}

export function createManagerSetEvent(manager: Address): ManagerSet {
  let managerSetEvent = changetype<ManagerSet>(newMockEvent())

  managerSetEvent.parameters = new Array()

  managerSetEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return managerSetEvent
}

export function createMintFeeUpdatedEvent(mintFee: BigInt): MintFeeUpdated {
  let mintFeeUpdatedEvent = changetype<MintFeeUpdated>(newMockEvent())

  mintFeeUpdatedEvent.parameters = new Array()

  mintFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "mintFee",
      ethereum.Value.fromUnsignedBigInt(mintFee)
    )
  )

  return mintFeeUpdatedEvent
}

export function createMintedEvent(
  nftIds: Array<BigInt>,
  amounts: Array<BigInt>,
  to: Address
): Minted {
  let mintedEvent = changetype<Minted>(newMockEvent())

  mintedEvent.parameters = new Array()

  mintedEvent.parameters.push(
    new ethereum.EventParam(
      "nftIds",
      ethereum.Value.fromUnsignedBigIntArray(nftIds)
    )
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return mintedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRandomRedeemFeeUpdatedEvent(
  randomRedeemFee: BigInt
): RandomRedeemFeeUpdated {
  let randomRedeemFeeUpdatedEvent = changetype<RandomRedeemFeeUpdated>(
    newMockEvent()
  )

  randomRedeemFeeUpdatedEvent.parameters = new Array()

  randomRedeemFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "randomRedeemFee",
      ethereum.Value.fromUnsignedBigInt(randomRedeemFee)
    )
  )

  return randomRedeemFeeUpdatedEvent
}

export function createRedeemedEvent(
  nftIds: Array<BigInt>,
  specificIds: Array<BigInt>,
  to: Address
): Redeemed {
  let redeemedEvent = changetype<Redeemed>(newMockEvent())

  redeemedEvent.parameters = new Array()

  redeemedEvent.parameters.push(
    new ethereum.EventParam(
      "nftIds",
      ethereum.Value.fromUnsignedBigIntArray(nftIds)
    )
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam(
      "specificIds",
      ethereum.Value.fromUnsignedBigIntArray(specificIds)
    )
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return redeemedEvent
}

export function createSwappedEvent(
  nftIds: Array<BigInt>,
  amounts: Array<BigInt>,
  specificIds: Array<BigInt>,
  redeemedIds: Array<BigInt>,
  to: Address
): Swapped {
  let swappedEvent = changetype<Swapped>(newMockEvent())

  swappedEvent.parameters = new Array()

  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "nftIds",
      ethereum.Value.fromUnsignedBigIntArray(nftIds)
    )
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "specificIds",
      ethereum.Value.fromUnsignedBigIntArray(specificIds)
    )
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "redeemedIds",
      ethereum.Value.fromUnsignedBigIntArray(redeemedIds)
    )
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return swappedEvent
}

export function createTargetRedeemFeeUpdatedEvent(
  targetRedeemFee: BigInt
): TargetRedeemFeeUpdated {
  let targetRedeemFeeUpdatedEvent = changetype<TargetRedeemFeeUpdated>(
    newMockEvent()
  )

  targetRedeemFeeUpdatedEvent.parameters = new Array()

  targetRedeemFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "targetRedeemFee",
      ethereum.Value.fromUnsignedBigInt(targetRedeemFee)
    )
  )

  return targetRedeemFeeUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createVaultInitEvent(
  vaultId: BigInt,
  assetAddress: Address,
  is1155: boolean,
  allowAllItems: boolean
): VaultInit {
  let vaultInitEvent = changetype<VaultInit>(newMockEvent())

  vaultInitEvent.parameters = new Array()

  vaultInitEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )
  vaultInitEvent.parameters.push(
    new ethereum.EventParam(
      "assetAddress",
      ethereum.Value.fromAddress(assetAddress)
    )
  )
  vaultInitEvent.parameters.push(
    new ethereum.EventParam("is1155", ethereum.Value.fromBoolean(is1155))
  )
  vaultInitEvent.parameters.push(
    new ethereum.EventParam(
      "allowAllItems",
      ethereum.Value.fromBoolean(allowAllItems)
    )
  )

  return vaultInitEvent
}
