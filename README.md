# slugster

A complete slugifier with no dependencies for Node.js and the Browser.

### Installation

```
npm i --save slugster
```

### Usage

```
const slugster = require('slugster);

// or es6 import:

import slugster from 'slugster';
```

The package will take care of everything for your slugify job, including emoji and international (non-standard) characters.

```
slugster('Anyone & Everyone'); // => anyone-and-everyone

slugster('❤️ Étretat & Ille-sur-Têt!') // => etretat-and-ille-sur-tet
```

If you want a different separator, Pass it as a second parameter:

```
slugster('Anyone & Everyone', '_'); // => anyone_and_everyone
```

