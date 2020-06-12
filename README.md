# slugster

A complete slugifier with no dependencies for Node.js and the Browser that will also handle emoji and/or international (non-standard) characters.

### Installation

```
npm i slugster
```

### Usage

```
const slugster = require('slugster');

// or es6 import:

import slugster from 'slugster';
```

```
slugster('Anyone & Everyone'); // => anyone-and-everyone

slugster('❤️ Étretat & Ille-sur-Têt!') // => etretat-and-ille-sur-tet
```

If you want a different separator, pass it as a second parameter:

```
slugster('Anyone & Everyone', '_'); // => anyone_and_everyone
```
