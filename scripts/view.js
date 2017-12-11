let p = document.createElement('p'),
    h = document.createElement('h1'),
    a = document.createElement('a');
let View = {
    render: function(template, model, prop) {
        let item = [];
        for (let key in model) {
            item.push(model[key]);
        }
        let parts = item[prop];
        let values = [];
        for (let key in parts) {
            values.push(parts[key]);
        }
        let n = values[0];
        let allValues = [];
        Object.getOwnPropertyNames(n).forEach(function(val, idx, array) {
            allValues.push(val + ' -> ' + n[val]);
            if (val === 'title') {
                template.appendChild(h);
                h.innerText = n[val];
            } else if (val === 'content') {
                template.appendChild(p);
                p.innerText = n[val];
            } else if (val === 'href') {
                template.appendChild(a);
                a.setAttribute('href', n[val]);
                a.innerText = 'read more';
            } else if (val !== 'title' && val !== 'content') {
                h.innerText = '';
                a.innerText = '';
                template.appendChild(p);
                p.innerText = allValues.join(', ');
            }

        }); // код ужасен, но это эпик вин
    }
}