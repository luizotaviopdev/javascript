function cabeca() {
    const _hdr_Xy7q = document.querySelector('header');
    const _st_Smz91 = document.getElementsByClassName('material-symbols-outlined')[0];
    const _ttl_Qr3vx = document.querySelector('h1');
    const _ovl_Gp8nw = document.getElementById('overlay');
    let _ht_Zk4ms = _hdr_Xy7q.offsetHeight;

    window.addEventListener('resize', () => {
        const _newHt_Bv9ql = _hdr_Xy7q.offsetHeight;

        if (_ht_Zk4ms != _newHt_Bv9ql) {
            _ht_Zk4ms = _newHt_Bv9ql;

            if (_ovl_Gp8nw.style.transform == 'translateY(-100vh)') {
                _hdr_Xy7q.style.transition = '0s';
                _hdr_Xy7q.offsetHeight;
                _hdr_Xy7q.style.transform = `translateY(-${_newHt_Bv9ql}px)`;
                _hdr_Xy7q.offsetHeight;
                _hdr_Xy7q.style.transition = '0.6s';
            } else {
                _st_Smz91.style.transition = '0s';
                _st_Smz91.offsetHeight;
                _st_Smz91.style.transform = `translateY(${_newHt_Bv9ql}px)`;
                _st_Smz91.offsetHeight;
                _st_Smz91.style.transition = '0.6s';
            }
        }
    });

    if (_hdr_Xy7q.style.transform === 'translateY(0px)') {
        _hdr_Xy7q.style.transform = `translateY(-${_ht_Zk4ms}px)`;
        _st_Smz91.textContent = 'arrow_downward';
        _st_Smz91.style.transform = 'translateY(0px)';
        _ttl_Qr3vx.style.paddingTop = '100px';
        _ovl_Gp8nw.style.transform = 'translateY(-100vh)';
    } else {
        _hdr_Xy7q.style.transform = 'translateY(0px)';
        _st_Smz91.textContent = 'arrow_upward';
        _st_Smz91.style.transform = `translateY(${_ht_Zk4ms}px)`;
        _ttl_Qr3vx.style.paddingTop = '170px';
        _ovl_Gp8nw.style.transform = 'translateY(0vh)';
    }
}

document.getElementById('valor').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        executar()
    }
})

function executar(){
    let valor = Number(document.getElementById('valor').value)
    let desconto = valor * 0.05
    const saida = document.getElementById('saida')

    if (valor === 0) {
        alert("Por favor, digite um valor válido maior do que 0")
    } else {
        saida.innerHTML = `O valor do produto é de R$${valor.toFixed(2).replace('.', ',')} <br>
        O desconto aplicado será de R$${desconto.toFixed(2).replace('.', ',')} <br>
        Valor final: ${(valor - desconto).toFixed(2).replace('.', ',')}`
    }
}