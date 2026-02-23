"""
Minions Availability SDK — Type Schemas
Custom MinionType schemas for Minions Availability.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

availability_snapshot_type = MinionType(
    id="availability-availability-snapshot",
    name="Availability snapshot",
    slug="availability-snapshot",
    description="A point-in-time capture of what slots are available across a tent.",
    icon="📸",
    schema=[
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="tentAreaId", type="string", label="tentAreaId"),
        FieldDefinition(name="capturedAt", type="string", label="capturedAt"),
        FieldDefinition(name="date", type="string", label="date"),
        FieldDefinition(name="sessionType", type="select", label="sessionType"),
        FieldDefinition(name="slotsTotal", type="number", label="slotsTotal"),
        FieldDefinition(name="slotsAvailable", type="number", label="slotsAvailable"),
        FieldDefinition(name="slotsBlocked", type="number", label="slotsBlocked"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="rawHtml", type="string", label="rawHtml"),
    ],
)

slot_state_type = MinionType(
    id="availability-slot-state",
    name="Slot state",
    slug="slot-state",
    description="The current availability state of a specific date+session+area combination.",
    icon="🟢",
    schema=[
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="tentAreaId", type="string", label="tentAreaId"),
        FieldDefinition(name="date", type="string", label="date"),
        FieldDefinition(name="sessionType", type="select", label="sessionType"),
        FieldDefinition(name="state", type="select", label="state"),
        FieldDefinition(name="lastCheckedAt", type="string", label="lastCheckedAt"),
        FieldDefinition(name="lastChangedAt", type="string", label="lastChangedAt"),
        FieldDefinition(name="previousState", type="select", label="previousState"),
    ],
)

availability_diff_type = MinionType(
    id="availability-availability-diff",
    name="Availability diff",
    slug="availability-diff",
    description="A detected change between two snapshots for the same slot.",
    icon="🔄",
    schema=[
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="tentAreaId", type="string", label="tentAreaId"),
        FieldDefinition(name="date", type="string", label="date"),
        FieldDefinition(name="sessionType", type="select", label="sessionType"),
        FieldDefinition(name="fromState", type="select", label="fromState"),
        FieldDefinition(name="toState", type="select", label="toState"),
        FieldDefinition(name="detectedAt", type="string", label="detectedAt"),
        FieldDefinition(name="snapshotBeforeId", type="string", label="snapshotBeforeId"),
        FieldDefinition(name="snapshotAfterId", type="string", label="snapshotAfterId"),
    ],
)

scan_config_type = MinionType(
    id="availability-scan-config",
    name="Scan config",
    slug="scan-config",
    description="Configuration for how often and what to scan for availability changes.",
    icon="⚙️",
    schema=[
        FieldDefinition(name="tentId", type="string", label="tentId"),
        FieldDefinition(name="scanIntervalMinutes", type="number", label="scanIntervalMinutes"),
        FieldDefinition(name="priority", type="select", label="priority"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastScanAt", type="string", label="lastScanAt"),
        FieldDefinition(name="nextScanAt", type="string", label="nextScanAt"),
        FieldDefinition(name="errorCount", type="number", label="errorCount"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

custom_types: list[MinionType] = [
    availability_snapshot_type,
    slot_state_type,
    availability_diff_type,
    scan_config_type,
]

