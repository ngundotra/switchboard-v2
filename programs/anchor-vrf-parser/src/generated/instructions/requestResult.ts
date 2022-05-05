/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as splToken from "@solana/spl-token";
import * as web3 from "@solana/web3.js";
import {
  RequestResultParams,
  requestResultParamsBeet,
} from "../types/RequestResultParams";

/**
 * @category Instructions
 * @category RequestResult
 * @category generated
 */
export type RequestResultInstructionArgs = {
  params: RequestResultParams;
};
/**
 * @category Instructions
 * @category RequestResult
 * @category generated
 */
const requestResultStruct = new beet.BeetArgsStruct<
  RequestResultInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["params", requestResultParamsBeet],
  ],
  "RequestResultInstructionArgs"
);
/**
 * Accounts required by the _requestResult_ instruction
 * @category Instructions
 * @category RequestResult
 * @category generated
 */
export type RequestResultInstructionAccounts = {
  state: web3.PublicKey;
  authority: web3.PublicKey;
  switchboardProgram: web3.PublicKey;
  vrf: web3.PublicKey;
  oracleQueue: web3.PublicKey;
  queueAuthority: web3.PublicKey;
  dataBuffer: web3.PublicKey;
  permission: web3.PublicKey;
  escrow: web3.PublicKey;
  payerWallet: web3.PublicKey;
  payerAuthority: web3.PublicKey;
  recentBlockhashes: web3.PublicKey;
  programState: web3.PublicKey;
};

const requestResultInstructionDiscriminator = [
  52, 47, 170, 99, 27, 80, 113, 141,
];

/**
 * Creates a _RequestResult_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RequestResult
 * @category generated
 */
export function createRequestResultInstruction(
  accounts: RequestResultInstructionAccounts,
  args: RequestResultInstructionArgs
) {
  const {
    state,
    authority,
    switchboardProgram,
    vrf,
    oracleQueue,
    queueAuthority,
    dataBuffer,
    permission,
    escrow,
    payerWallet,
    payerAuthority,
    recentBlockhashes,
    programState,
  } = accounts;

  const [data] = requestResultStruct.serialize({
    instructionDiscriminator: requestResultInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: state,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: switchboardProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: vrf,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: oracleQueue,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: queueAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: dataBuffer,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: permission,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: escrow,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: payerWallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: payerAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: recentBlockhashes,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: programState,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      "FAnbznqZvZ7eijxQ6mKPoyDdM33o8cdM6wsUZtv2dFib"
    ),
    keys,
    data,
  });
  return ix;
}