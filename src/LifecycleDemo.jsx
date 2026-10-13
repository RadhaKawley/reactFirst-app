import { useState, useEffect } from 'react';
export default function LifecycleDemo() {
const [count, setCount] = useState(0);
useEffect(() => {
console.log('Mounted');
return () => {
console.log('Unmounted');
};
}, []);
useEffect(() => {
console.log('count updated:', count);
}, [count]);
return (
<div>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
}