# eslint-plugin-taskcluster

An eslint plugin for the Taskcluster Platform.

## Installation

You'll first need to install [ESLint](http://eslint.org) and babel-eslint:

```
$ npm install eslint@1.x babel-eslint@5 --save-dev

$ npm install eslint@2.x babel-eslint@6 --save-dev
```

Next, install `eslint-plugin-taskcluster`:

```
$ npm install eslint-plugin-taskcluster --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-taskcluster` globally.

## Usage

Add `taskcluster` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "taskcluster"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "taskcluster/no-for-in": 2
    }
}
```

## Supported Rules

* `no-for-in`: Disallow all instances of for-in loops.





