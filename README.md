This is a fork repository of [kagesenshi/gnome-shell-extension-stealmyfocus](https://github.com/kagesenshi/gnome-shell-extension-stealmyfocus)

metadata.json is modified referencing [https://mytechnicalthoughts.wordpress.com/2013/04/14/how-to-manually-install-a-gnome-shell-extension/](https://mytechnicalthoughts.wordpress.com/2013/04/14/how-to-manually-install-a-gnome-shell-extension/)

Steal My Focus - Gnome Shell Extension
======================================

Let windows steal focus. Removes the annoying 'Window is ready'
notification and focus window immediately.

You can also specify a blacklist for annoying applications in `metadata.json` (eg. Skype).

## Installation

1. Run `gnome-shell --version` to check your version, e.g. `3.28.3`.
2. Change `shell-version` in `metadata.json` to match your version, e.g. I changed mine to `3.28.*`
3. Run `make`.
4. Press ALT + F2 and enter `r` command. Confirm with enter.
5. Open Tweaks and under Extensions turn on 'Steal My Focus'
