/* learning about key events -

Sure! Let's break it down with some simple examples:

**keydown:**
- Imagine you're playing a game where you move a character using arrow keys. 
When you press and hold the 'up' arrow key, you want the character to keep moving upward smoothly.
- If you use the `keydown` event, the character will start moving upwards as soon as you press the 'up' arrow key. 
It doesn't wait for you to release the key; it just detects that you've started pressing it down.

**keypress:**
- Let's say you're typing in a text box on a website. You press the 'A' key on your keyboard to type the letter 'A'.
- If you use the `keypress` event, it will detect that you pressed the 'A' key and will let you type the letter 'A' into the text box.
 It won't trigger for keys like 'Shift' or 'Ctrl', and it won't trigger for non-character keys like the arrow keys.

**keyup:**
- You're playing a game again, and you want the character to stop moving when you release the 'up' arrow key.
- With the `keyup` event, the character will stop moving upwards as soon as you release the 'up' arrow key. 
It detects that you've let go of the key.

Here's a simple example to illustrate the difference:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Keyboard Events</title>
</head>
<body>

<p>Press a key!</p>

<script>
document.addEventListener('keydown', function(event) {
  console.log('Key Down:', event.key);
});

document.addEventListener('keypress', function(event) {
  console.log('Key Press:', event.key);
});

document.addEventListener('keyup', function(event) {
  console.log('Key Up:', event.key);
});
</script>

</body>
</html>
```
If you open this HTML page in a browser and open the developer console, 
you'll see different messages logged for each event as you press and release keys on your keyboard. 
This demonstrates the difference in timing and which keys trigger each event.
 */






const insert = document.getElementById('insert');

// window.addEventListener('keydown', (e) => {
//    insert.innerHTML = `
//    <table>
//   <tr>
//     <th>Key</th>
//     <th>KeyCode</th>
//     <th>Key Name</th>
//   </tr>
//   <tr>
//     <td>${e.key}</td>
//     <td>${e.keyCode}</td>
//     <td>${e.code}</td>
//   </tr>
// </table>
//    `
window.addEventListener('keypress', (e) => {
   insert.innerHTML = `
   <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Key Name</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
   `
})