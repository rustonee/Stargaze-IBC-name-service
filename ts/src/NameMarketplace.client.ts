/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Uint128, InstantiateMsg, ExecuteMsg, Timestamp, Uint64, QueryMsg, Addr, BidOffset, NullableAsk, Ask, HooksResponse, ArrayOfAsk, NullableBid, Bid, ArrayOfBid, ConfigResponse, Decimal, SudoParams } from "./NameMarketplace.types";
export interface NameMarketplaceReadOnlyInterface {
  contractAddress: string;
  ask: ({
    tokenId
  }: {
    tokenId: string;
  }) => Promise<NullableAsk>;
  asks: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }) => Promise<ArrayOfAsk>;
  askCount: () => Promise<Uint64>;
  asksBySeller: ({
    limit,
    seller,
    startAfter
  }: {
    limit?: number;
    seller: string;
    startAfter?: string;
  }) => Promise<ArrayOfAsk>;
  bid: ({
    bidder,
    tokenId
  }: {
    bidder: string;
    tokenId: string;
  }) => Promise<NullableBid>;
  bidsByBidder: ({
    bidder,
    limit,
    startAfter
  }: {
    bidder: string;
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfBid>;
  bids: ({
    limit,
    startAfter,
    tokenId
  }: {
    limit?: number;
    startAfter?: string;
    tokenId: string;
  }) => Promise<ArrayOfBid>;
  bidsSortedByPrice: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: BidOffset;
  }) => Promise<ArrayOfBid>;
  reverseBidsSortedByPrice: ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: BidOffset;
  }) => Promise<ArrayOfBid>;
  bidsForSeller: ({
    limit,
    seller,
    startAfter
  }: {
    limit?: number;
    seller: string;
    startAfter?: BidOffset;
  }) => Promise<ArrayOfBid>;
  highestBid: ({
    tokenId
  }: {
    tokenId: string;
  }) => Promise<NullableBid>;
  askHooks: () => Promise<HooksResponse>;
  bidHooks: () => Promise<HooksResponse>;
  saleHooks: () => Promise<HooksResponse>;
  params: () => Promise<SudoParams>;
  renewalQueue: ({
    time
  }: {
    time: Timestamp;
  }) => Promise<ArrayOfAsk>;
  config: () => Promise<ConfigResponse>;
}
export class NameMarketplaceQueryClient implements NameMarketplaceReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.ask = this.ask.bind(this);
    this.asks = this.asks.bind(this);
    this.askCount = this.askCount.bind(this);
    this.asksBySeller = this.asksBySeller.bind(this);
    this.bid = this.bid.bind(this);
    this.bidsByBidder = this.bidsByBidder.bind(this);
    this.bids = this.bids.bind(this);
    this.bidsSortedByPrice = this.bidsSortedByPrice.bind(this);
    this.reverseBidsSortedByPrice = this.reverseBidsSortedByPrice.bind(this);
    this.bidsForSeller = this.bidsForSeller.bind(this);
    this.highestBid = this.highestBid.bind(this);
    this.askHooks = this.askHooks.bind(this);
    this.bidHooks = this.bidHooks.bind(this);
    this.saleHooks = this.saleHooks.bind(this);
    this.params = this.params.bind(this);
    this.renewalQueue = this.renewalQueue.bind(this);
    this.config = this.config.bind(this);
  }

  ask = async ({
    tokenId
  }: {
    tokenId: string;
  }): Promise<NullableAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ask: {
        token_id: tokenId
      }
    });
  };
  asks = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: number;
  }): Promise<ArrayOfAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks: {
        limit,
        start_after: startAfter
      }
    });
  };
  askCount = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ask_count: {}
    });
  };
  asksBySeller = async ({
    limit,
    seller,
    startAfter
  }: {
    limit?: number;
    seller: string;
    startAfter?: string;
  }): Promise<ArrayOfAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asks_by_seller: {
        limit,
        seller,
        start_after: startAfter
      }
    });
  };
  bid = async ({
    bidder,
    tokenId
  }: {
    bidder: string;
    tokenId: string;
  }): Promise<NullableBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bid: {
        bidder,
        token_id: tokenId
      }
    });
  };
  bidsByBidder = async ({
    bidder,
    limit,
    startAfter
  }: {
    bidder: string;
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_by_bidder: {
        bidder,
        limit,
        start_after: startAfter
      }
    });
  };
  bids = async ({
    limit,
    startAfter,
    tokenId
  }: {
    limit?: number;
    startAfter?: string;
    tokenId: string;
  }): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids: {
        limit,
        start_after: startAfter,
        token_id: tokenId
      }
    });
  };
  bidsSortedByPrice = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: BidOffset;
  }): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_sorted_by_price: {
        limit,
        start_after: startAfter
      }
    });
  };
  reverseBidsSortedByPrice = async ({
    limit,
    startBefore
  }: {
    limit?: number;
    startBefore?: BidOffset;
  }): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_bids_sorted_by_price: {
        limit,
        start_before: startBefore
      }
    });
  };
  bidsForSeller = async ({
    limit,
    seller,
    startAfter
  }: {
    limit?: number;
    seller: string;
    startAfter?: BidOffset;
  }): Promise<ArrayOfBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bids_for_seller: {
        limit,
        seller,
        start_after: startAfter
      }
    });
  };
  highestBid = async ({
    tokenId
  }: {
    tokenId: string;
  }): Promise<NullableBid> => {
    return this.client.queryContractSmart(this.contractAddress, {
      highest_bid: {
        token_id: tokenId
      }
    });
  };
  askHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ask_hooks: {}
    });
  };
  bidHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      bid_hooks: {}
    });
  };
  saleHooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      sale_hooks: {}
    });
  };
  params = async (): Promise<SudoParams> => {
    return this.client.queryContractSmart(this.contractAddress, {
      params: {}
    });
  };
  renewalQueue = async ({
    time
  }: {
    time: Timestamp;
  }): Promise<ArrayOfAsk> => {
    return this.client.queryContractSmart(this.contractAddress, {
      renewal_queue: {
        time
      }
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
}
export interface NameMarketplaceInterface extends NameMarketplaceReadOnlyInterface {
  contractAddress: string;
  sender: string;
  setAsk: ({
    seller,
    tokenId
  }: {
    seller: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeAsk: ({
    tokenId
  }: {
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateAsk: ({
    seller,
    tokenId
  }: {
    seller: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setBid: ({
    tokenId
  }: {
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeBid: ({
    tokenId
  }: {
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  acceptBid: ({
    bidder,
    tokenId
  }: {
    bidder: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  fundRenewal: ({
    tokenId
  }: {
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  refundRenewal: ({
    tokenId
  }: {
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  processRenewals: ({
    time
  }: {
    time: Timestamp;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setup: ({
    collection,
    minter
  }: {
    collection: string;
    minter: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class NameMarketplaceClient extends NameMarketplaceQueryClient implements NameMarketplaceInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.setAsk = this.setAsk.bind(this);
    this.removeAsk = this.removeAsk.bind(this);
    this.updateAsk = this.updateAsk.bind(this);
    this.setBid = this.setBid.bind(this);
    this.removeBid = this.removeBid.bind(this);
    this.acceptBid = this.acceptBid.bind(this);
    this.fundRenewal = this.fundRenewal.bind(this);
    this.refundRenewal = this.refundRenewal.bind(this);
    this.processRenewals = this.processRenewals.bind(this);
    this.setup = this.setup.bind(this);
  }

  setAsk = async ({
    seller,
    tokenId
  }: {
    seller: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_ask: {
        seller,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  removeAsk = async ({
    tokenId
  }: {
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_ask: {
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  updateAsk = async ({
    seller,
    tokenId
  }: {
    seller: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_ask: {
        seller,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  setBid = async ({
    tokenId
  }: {
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_bid: {
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  removeBid = async ({
    tokenId
  }: {
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_bid: {
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  acceptBid = async ({
    bidder,
    tokenId
  }: {
    bidder: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      accept_bid: {
        bidder,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  fundRenewal = async ({
    tokenId
  }: {
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      fund_renewal: {
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  refundRenewal = async ({
    tokenId
  }: {
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      refund_renewal: {
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  processRenewals = async ({
    time
  }: {
    time: Timestamp;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      process_renewals: {
        time
      }
    }, fee, memo, funds);
  };
  setup = async ({
    collection,
    minter
  }: {
    collection: string;
    minter: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      setup: {
        collection,
        minter
      }
    }, fee, memo, funds);
  };
}