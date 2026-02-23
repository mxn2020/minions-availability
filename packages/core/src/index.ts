/**
 * Minions Availability SDK
 *
 * Availability snapshots, slot states, and change detection for tent reservations
 *
 * @module @minions-availability/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Availability.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
