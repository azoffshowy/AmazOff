# AmazOff

> Patch-based customization layer for the stock Amazon app on rooted LG webOS TVs.

![Screenshot](./Screenshot.png?raw=true)

## Overview

**AmazOff** is an IPK application for **rooted LG webOS TVs**. It modifies the Amazon Prime Video Player with following patches applied:
- Remove Ads (Pre-, Mid- and Endrolls)
- Suppress telemetry

As a result, all launch paths—including the **remote control’s dedicated Amazon button**—will open the modified version.

AmazOff requires **[Homebrew Channel](https://www.webosbrew.org/)** to be present and functional.

## Status

- **Development stage:** early / experimental  
- **Tested on:** webOS 4.x, webOS 6.5
- **Amazon app variants:** 4.1.15, 6.3.38

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
2. Run **Patch**
3. Observe output in the built-in log view.
4. Launch the Amazon Prime Video App. A Popup-message should appear showing the patch loading state.

Notes:
- The app may close immediately after a patch or unpatch operation.  
  This behavior is expected. Log is persistent, you can check the actions outcome by reopening the patcher.
- A successful patch is confirmed by a **toast notification** when the Amazon app is launched.

## Development Notes

The most convenient way to see the modifications is to js-beautify the nginx-delivered .js file and diff with the original source. 

