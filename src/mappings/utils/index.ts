// Copyright 2020-2022 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AcalaEvmEvent } from '@subql/acala-evm-processor';

/**
 *
 * @param handler
 * @param event
 * @returns `${topicHandler:block:Txhash}`
 */
export const getUpsertAt = (handler: string, event: AcalaEvmEvent<any>): string => {
  const upsertAt = `${handler}:${event.blockNumber}:${event.transactionHash}`;
  return upsertAt;
};
