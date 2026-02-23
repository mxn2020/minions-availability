/**
 * @module @minions-availability/sdk/schemas
 * Custom MinionType schemas for Minions Availability.
 */

import type { MinionType } from 'minions-sdk';

export const availabilitysnapshotType: MinionType = {
  id: 'availability-availability-snapshot',
  name: 'Availability snapshot',
  slug: 'availability-snapshot',
  description: 'A point-in-time capture of what slots are available across a tent.',
  icon: '📸',
  schema: [
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'tentAreaId', type: 'string', label: 'tentAreaId' },
    { name: 'capturedAt', type: 'string', label: 'capturedAt' },
    { name: 'date', type: 'string', label: 'date' },
    { name: 'sessionType', type: 'select', label: 'sessionType' },
    { name: 'slotsTotal', type: 'number', label: 'slotsTotal' },
    { name: 'slotsAvailable', type: 'number', label: 'slotsAvailable' },
    { name: 'slotsBlocked', type: 'number', label: 'slotsBlocked' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'rawHtml', type: 'string', label: 'rawHtml' },
  ],
};

export const slotstateType: MinionType = {
  id: 'availability-slot-state',
  name: 'Slot state',
  slug: 'slot-state',
  description: 'The current availability state of a specific date+session+area combination.',
  icon: '🟢',
  schema: [
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'tentAreaId', type: 'string', label: 'tentAreaId' },
    { name: 'date', type: 'string', label: 'date' },
    { name: 'sessionType', type: 'select', label: 'sessionType' },
    { name: 'state', type: 'select', label: 'state' },
    { name: 'lastCheckedAt', type: 'string', label: 'lastCheckedAt' },
    { name: 'lastChangedAt', type: 'string', label: 'lastChangedAt' },
    { name: 'previousState', type: 'select', label: 'previousState' },
  ],
};

export const availabilitydiffType: MinionType = {
  id: 'availability-availability-diff',
  name: 'Availability diff',
  slug: 'availability-diff',
  description: 'A detected change between two snapshots for the same slot.',
  icon: '🔄',
  schema: [
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'tentAreaId', type: 'string', label: 'tentAreaId' },
    { name: 'date', type: 'string', label: 'date' },
    { name: 'sessionType', type: 'select', label: 'sessionType' },
    { name: 'fromState', type: 'select', label: 'fromState' },
    { name: 'toState', type: 'select', label: 'toState' },
    { name: 'detectedAt', type: 'string', label: 'detectedAt' },
    { name: 'snapshotBeforeId', type: 'string', label: 'snapshotBeforeId' },
    { name: 'snapshotAfterId', type: 'string', label: 'snapshotAfterId' },
  ],
};

export const scanconfigType: MinionType = {
  id: 'availability-scan-config',
  name: 'Scan config',
  slug: 'scan-config',
  description: 'Configuration for how often and what to scan for availability changes.',
  icon: '⚙️',
  schema: [
    { name: 'tentId', type: 'string', label: 'tentId' },
    { name: 'scanIntervalMinutes', type: 'number', label: 'scanIntervalMinutes' },
    { name: 'priority', type: 'select', label: 'priority' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastScanAt', type: 'string', label: 'lastScanAt' },
    { name: 'nextScanAt', type: 'string', label: 'nextScanAt' },
    { name: 'errorCount', type: 'number', label: 'errorCount' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const customTypes: MinionType[] = [
  availabilitysnapshotType,
  slotstateType,
  availabilitydiffType,
  scanconfigType,
];

