fetch('http://localhost:3000/api/logs')
  .then(res => res.json())
  .then(logs => {
    const table = document.getElementById('logTable')

    logs.forEach(log => {
      const tr = document.createElement('tr')

      tr.innerHTML = `
        <td>${log.id}</td>
        <td>${log.product_id}</td>
        <td class="${log.action}">${log.action}</td>
        <td>${log.quantity}</td>
        <td>${log.created_at}</td>
      `

      table.appendChild(tr)
    })
  })
