/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Decimal, Timestamp, Uint64, InstantiateMsg, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, ExecuteMsg, Addr, Binary, Expiration, Metadata, NFT, TextRecord, MintMsgForMetadata, UpdateCollectionInfoMsgForRoyaltyInfoResponse, QueryMsg, AllNftInfoResponseForMetadata, OwnerOfResponse, Approval, NftInfoResponseForMetadata, OperatorsResponse, TokensResponse, ApprovalResponse, ApprovalsResponse, AssociatedAddressResponse, CollectionInfoResponse, ContractInfoResponse, MinterResponse, NameResponse, NameMarketplaceResponse, NumTokensResponse, ParamsResponse, Nullable_String } from "./Sg721Name.types";
export interface Sg721NameMessage {
  contractAddress: string;
  sender: string;
  setNameMarketplace: ({
    address
  }: {
    address: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  associateAddress: ({
    address,
    name
  }: {
    address?: string;
    name: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMetadata: ({
    metadata,
    name
  }: {
    metadata?: Metadata;
    name: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateImageNft: ({
    name,
    nft
  }: {
    name: string;
    nft?: NFT;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  addTextRecord: ({
    name,
    record
  }: {
    name: string;
    record: TextRecord;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeTextRecord: ({
    name,
    recordName
  }: {
    name: string;
    recordName: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateTextRecord: ({
    name,
    record
  }: {
    name: string;
    record: TextRecord;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  verifyTextRecord: ({
    name,
    recordName,
    result
  }: {
    name: string;
    recordName: string;
    result: boolean;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateVerifier: ({
    verifier
  }: {
    verifier?: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  transferNft: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  sendNft: ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  approve: ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  revoke: ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  approveAll: ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  revokeAll: ({
    operator
  }: {
    operator: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mint: ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension: Metadata;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burn: ({
    tokenId
  }: {
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateCollectionInfo: ({
    collectionInfo
  }: {
    collectionInfo: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateStartTradingTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  freezeCollectionInfo: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class Sg721NameMessageComposer implements Sg721NameMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.setNameMarketplace = this.setNameMarketplace.bind(this);
    this.associateAddress = this.associateAddress.bind(this);
    this.updateMetadata = this.updateMetadata.bind(this);
    this.updateImageNft = this.updateImageNft.bind(this);
    this.addTextRecord = this.addTextRecord.bind(this);
    this.removeTextRecord = this.removeTextRecord.bind(this);
    this.updateTextRecord = this.updateTextRecord.bind(this);
    this.verifyTextRecord = this.verifyTextRecord.bind(this);
    this.updateVerifier = this.updateVerifier.bind(this);
    this.transferNft = this.transferNft.bind(this);
    this.sendNft = this.sendNft.bind(this);
    this.approve = this.approve.bind(this);
    this.revoke = this.revoke.bind(this);
    this.approveAll = this.approveAll.bind(this);
    this.revokeAll = this.revokeAll.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.updateCollectionInfo = this.updateCollectionInfo.bind(this);
    this.updateStartTradingTime = this.updateStartTradingTime.bind(this);
    this.freezeCollectionInfo = this.freezeCollectionInfo.bind(this);
  }

  setNameMarketplace = ({
    address
  }: {
    address: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_name_marketplace: {
            address
          }
        })),
        funds
      })
    };
  };
  associateAddress = ({
    address,
    name
  }: {
    address?: string;
    name: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          associate_address: {
            address,
            name
          }
        })),
        funds
      })
    };
  };
  updateMetadata = ({
    metadata,
    name
  }: {
    metadata?: Metadata;
    name: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_metadata: {
            metadata,
            name
          }
        })),
        funds
      })
    };
  };
  updateImageNft = ({
    name,
    nft
  }: {
    name: string;
    nft?: NFT;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_image_nft: {
            name,
            nft
          }
        })),
        funds
      })
    };
  };
  addTextRecord = ({
    name,
    record
  }: {
    name: string;
    record: TextRecord;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_text_record: {
            name,
            record
          }
        })),
        funds
      })
    };
  };
  removeTextRecord = ({
    name,
    recordName
  }: {
    name: string;
    recordName: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_text_record: {
            name,
            record_name: recordName
          }
        })),
        funds
      })
    };
  };
  updateTextRecord = ({
    name,
    record
  }: {
    name: string;
    record: TextRecord;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_text_record: {
            name,
            record
          }
        })),
        funds
      })
    };
  };
  verifyTextRecord = ({
    name,
    recordName,
    result
  }: {
    name: string;
    recordName: string;
    result: boolean;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          verify_text_record: {
            name,
            record_name: recordName,
            result
          }
        })),
        funds
      })
    };
  };
  updateVerifier = ({
    verifier
  }: {
    verifier?: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_verifier: {
            verifier
          }
        })),
        funds
      })
    };
  };
  transferNft = ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          transfer_nft: {
            recipient,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  sendNft = ({
    contract,
    msg,
    tokenId
  }: {
    contract: string;
    msg: Binary;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          send_nft: {
            contract,
            msg,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  approve = ({
    expires,
    spender,
    tokenId
  }: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          approve: {
            expires,
            spender,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  revoke = ({
    spender,
    tokenId
  }: {
    spender: string;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          revoke: {
            spender,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  approveAll = ({
    expires,
    operator
  }: {
    expires?: Expiration;
    operator: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          approve_all: {
            expires,
            operator
          }
        })),
        funds
      })
    };
  };
  revokeAll = ({
    operator
  }: {
    operator: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          revoke_all: {
            operator
          }
        })),
        funds
      })
    };
  };
  mint = ({
    extension,
    owner,
    tokenId,
    tokenUri
  }: {
    extension: Metadata;
    owner: string;
    tokenId: string;
    tokenUri?: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {
            extension,
            owner,
            token_id: tokenId,
            token_uri: tokenUri
          }
        })),
        funds
      })
    };
  };
  burn = ({
    tokenId
  }: {
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn: {
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  updateCollectionInfo = ({
    collectionInfo
  }: {
    collectionInfo: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_collection_info: {
            collection_info: collectionInfo
          }
        })),
        funds
      })
    };
  };
  updateStartTradingTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_start_trading_time: {}
        })),
        funds
      })
    };
  };
  freezeCollectionInfo = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          freeze_collection_info: {}
        })),
        funds
      })
    };
  };
}