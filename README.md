# Medium Auto-Clapper

## Table of Contents

-   [Medium Auto-Clapper](#medium-auto-clapper)
    -   [Table of Contents](#table-of-contents)
    -   [About ](#about-)
        -   [Installing](#installing)
        -   [Development](#development)
    -   [Usage ](#usage-)

## About <a name = "about"></a>

I got bored of clapping on Medium articles and getting Carpal Tunnel Syndrome, so I decided to automate the process. This extension will clap for you on Medium articles. Meaning, click on the clap button and do the +50 claps for you automatically.

### Installing

1. Clone the repository
2. Go to `chrome://extensions/`
3. Enable Developer Mode
4. Click on `Load Unpacked`
5. Select the folder where you cloned the repository
6. Go to any Medium article and click on the clap button
7. Watch the magic happen
8. Profit

### Development

1. Clone the repository

```bash
git clone https://github.com/CodeByAidan/Medium-Auto-Clapper
```

2. Download the dependencies

```bash
npm install --production
```

3. Build the typescript files

```bash
npm run build # literally just runs npx tsc
```

or watch the files

```bash
npm run watch # literally just runs npx tsc --watch
```

## Usage <a name = "usage"></a>

Go to any Medium article and click on the clap button. The extension will do the rest for you.
