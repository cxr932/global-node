### Setup + install

1. run `npm pack`
2. run `npm install -g global-node-1.0.0.tgz` (or whatever the file is)
3. all methods in package.json's `bin: {...}` have become global

### pattern-rename
```
pattern-rename <path> <searchPattern> <replacePattern>
```

Example:
```
pattern-rename ./ ^beginning-of-filename-(.*) removed-beginning-$1
```
The above would transform a filename like `beginning-of-filename-bla-bla.jpg` into `removed-beginning-bla-bla.jpg`
