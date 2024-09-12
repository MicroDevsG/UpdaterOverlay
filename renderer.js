// Manejo de eventos para los botones
document.getElementById('debugButton1')?.addEventListener('click', async () => {
  const debugButton1 = document.getElementById('debugButton1');
  if (!debugButton1) return;

  console.log('Debug Button 1 clicked');
  debugButton1.disabled = true;
  try {
    const response = await ipcRenderer.invoke('debug-action', 'Debug Action 1');
    alert(response);
    debugButton1.disabled = false;
  } catch (error) {
    console.error(error);
  }
});

document.getElementById('debugButton2')?.addEventListener('click', async () => {
  const debugButton2 = document.getElementById('debugButton2');
  if (!debugButton2) return;

  console.log('Debug Button 2 clicked');
  debugButton2.disabled = true;
  try {
    const response = await ipcRenderer.invoke('debug-action', 'Debug Action 2');
    alert(response);
    debugButton2.disabled = false;
  } catch (error) {
    console.error(error);
  }
});
