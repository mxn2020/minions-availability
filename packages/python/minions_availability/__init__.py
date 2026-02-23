"""
Minions Availability Python SDK

Availability snapshots, slot states, and change detection for tent reservations
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Availability.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
