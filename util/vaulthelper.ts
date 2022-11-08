import { newMockEvent } from "matchstick-as";
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Vault } from "../generated/schema";
import { NFTXVault } from "../generated/Vault/NFTXVault";
export function getVault(address: Address): Vault {
  let vaultId = address.toHexString();
  let vault = Vault.load(vaultId);
  if (!vault) {
    vault = new Vault(vaultId);
    vault.assetAddress = address;

    let vaultContract = NFTXVault.bind(address);

    let name = vaultContract.try_name();
    if (!name.reverted) {
      vault.name = name.value;
    }

    let symbol = vaultContract.try_symbol();
    if (!symbol.reverted) {
      vault.symbol = symbol.value;
    }

    let assetAddress = vaultContract.try_assetAddress();
    if (!assetAddress.reverted) {
      vault.assetAddress = assetAddress.value;
    }

    let is1155 = vaultContract.try_is1155();
    if (!is1155.reverted) {
      vault.is1155 = is1155.value;
    }

    let allowAllItems = vaultContract.try_allowAllItems();
    if (!allowAllItems.reverted) {
      vault.allowAllItems = allowAllItems.value;
    }

    let totalHoldings = vaultContract.try_balanceOf(assetAddress.value);
    if (!totalHoldings.reverted) {
      vault.totalHoldings = totalHoldings.value;
    }
  }
  return vault;
}

//export function createVault
// export function setVaultFees 
// export function disableVaultFees 
// export function setFeeDistributor
// export function deployVault
// export function setEligibilityManager
//export function Mint
//export function Swap
//export function Redeem
//export function setFactoryFees - emit UpdateFactoryFees(mintFee, randomRedeemFee, targetRedeemFee, randomSwapFee, targetSwapFee);

