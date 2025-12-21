# AmazOff

> Patch-based customization layer for the stock Amazon app on rooted LG webOS TVs.

[Screenshot](./Screenshot.png?raw=true)

## Overview

**AmazOff** is an IPK application for **rooted LG webOS TVs**.  
It operates directly on the preinstalled Amazon app and applies reversible modifications to alter its runtime behavior.

The patch is applied **in-place** on the default Amazon app.  
As a result, all launch paths—including the **remote control’s dedicated Amazon button**—will open the modified version.

AmazOff requires **[Homebrew Channel](https://www.webosbrew.org/)** to be present and functional.

## Status

- **Development stage:** early / experimental  
- **Tested on:** webOS 4.x  
- **Amazon app variants:** 4.1.15  

## Requirements

- Rooted LG webOS TV  
- [Homebrew Channel](https://www.webosbrew.org/)  
- Stock Amazon Prime Video app installed  

## Installation

Preferred installation method:

- Install the released `.ipk` using **[Device Manager for webOS](https://github.com/webosbrew/dev-manager-desktop)**

This avoids manual packaging, signing, or SSH interaction.

## Usage

1. Launch **AmazOff**
2. Choose one of the two available actions:
   - **Patch**
   - **Unpatch**
3. Observe output in the built-in log view

Notes:
- The app may close immediately after a patch or revert operation.  
  This behavior is expected. Log is persistent, you can check by reopening.
- A successful patch is confirmed by a **toast notification** when the Amazon app is launched.

No configuration, profiles, or persistence layers exist yet.  
The app performs direct apply / undo operations only.

## Behavior Summary

- Operates on the **existing** Amazon app installation  
- Modifies runtime behavior without / modifying the app directly  
- Fully reversible through the same interface  
- No external files or settings  
- No background services  

## Risks and Warnings

- Modifications may be detectable by Amazon-side integrity or behavior checks
- Future Amazon app updates may invalidate patches
- No guarantees of compatibility across regions or versions
- Use on production devices carries inherent risk

