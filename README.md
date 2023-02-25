<div align="center">
        <h1>
            do-effect
        </h1>
</div>

### Features

- Don't Do it!
- Run Now!
- Dynamically call useEffects via the virtual dom
### Install

    npm install do-effect


### Quickstart

```tsx
import {useState, useMemo} from 'react';
import { DoEffect } from 'do-effect';

interface AppProps {
  children: React;
  doAThing: () => void;
}

function App({ children, doAThing }: AppProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && (
        <DoEffect
          effect={() => {
            doAThing();
            setLoading(false);
          }}
        />
      )}
      {children}
    </div>
  );
}
```
