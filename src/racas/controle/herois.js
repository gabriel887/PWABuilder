$(document).ready(function() {
    $('.btn-modalHerois').click(function(e) {
        e.preventDefault()
        $('.modal-title').empty()
        $('.modal-body').empty()
        var idHeroi = $(this).attr('id')
        if (idHeroi == 'paladino') {
            var texto = `<div class="modal-header">
            <div class="modal-title">
                <img src="img/retratoPaladino.jpg" class="img-rounded img-responsive">
                <h3>Paladino</h3>
            </div>
        </div>
        <div class="modal-body">
            <a type="button" class="btn btn-default btn-sm btn-Q" id="paladino">
                <div class="col-1"><img src="img/Qpaladino.png" class="img-rounded img-responsive"></div>
            </a>
            <a type="button" class="btn btn-default btn-sm btn-W" id="paladino">
                <div class="col-1"><img src="img/Wpaladino.gif" class="img-rounded img-responsive"></div>
            </a>
            <a type="button" class="btn btn-default btn-sm btn-E" id="paladino">
                <div class="col-1"><img src="img/Epaladino.gif" class="img-rounded img-responsive"></div>
            </a>
            <a type="button" class="btn btn-default btn-sm btn-R" id="paladino">
                <div class="col-1"><img src="img/Rpaladino.gif" class="img-rounded img-responsive"></div>
            </a>
            <div class=" p-3" id="textoHabilidade">
            <h5 id="tituloHabilidade">Luz sagrada ou Holy Ligh<strong>t</strong></h5>
            <p>Uma luz sagrada que pode curar uma unidade viva amiga ou danificar uma unidade morta-viva inimiga.
            </p>
            <p>Não pode ser lançada sobre si mesmo.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">65</th>
                        <th scope="col" class="text-center">5 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Cura 200 de vida OU dá 100 de dano em uma unidade morto-vivo inimiga.</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">65</th>
                        <th scope="col" class="text-center">5 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Cura 400 de vida OU dá 200 de dano em uma unidade morto-vivo inimiga.</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">65</th>
                        <th scope="col" class="text-center">5 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Cura 600 de vida de uma unidade aliada OU da 300 de dano em uma unidade morto-vivo inimiga.</th>
                    </tr>
                </tbody>
            </table>
            </div>`
        } else if (idHeroi == 'arquimago') {
            `<div class="modal-title">
            <img src="img/retratoArquimago.jpg" class="img-rounded img-responsive">
            <h3>Arquimago</h3>
            </div>
            </div>
            <div class="modal-body">
            <a type="button" class="btn btn-default btn-sm btn-Q" id="arquimago">
            <div class="col-1"><img src="img/Qarquimago.gif" class="img-rounded img-responsive"></div>
            </a>
            <a type="button" class="btn btn-default btn-sm btn-W" id="arquimago">
            <div class="col-1"><img src="img/Warquimago.gif" class="img-rounded img-responsive"></div>
            </a>
            <a type="button" class="btn btn-default btn-sm btn-E" id="arquimago">
            <div class="col-1"><img src="img/Earquimago.gif" class="img-rounded img-responsive"></div>
            </a>
            <a type="button" class="btn btn-default btn-sm btn-R" id="arquimago">
            <div class="col-1"><img src="img/Rarquimago.gif" class="img-rounded img-responsive"></div>
            </a>
            <div class=" p-3" id="textoHabilidade">
            <h5 id="tituloHabilidade">Tempesdade de gelo ou<strong>B</strong>lizzard</h5>
            <p>Invoca chuvas de fragmentos de gelo congelados que danificam unidades em uma área-alvo.</p>
            <p>É uma habilidade canalizada, então o Arquimago precisa ficar parado para conjurar. Efeitos de stun também pode mcancelar a habilidade</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">75 de mana</th>
                        <th scope="col" class="text-center">6 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">6 ondas com 30 de dano cada, 150 de dano máximo por onda</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">75 de mana</th>
                        <th scope="col" class="text-center">8 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">8 ondas com 40 de dano cada, 200 de dano máximo por onda</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">75 de mana</th>
                        <th scope="col" class="text-center">10 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">10 ondas com 30 de dano cada, 250 de dano máximo por onda</th>
                    </tr>
                </tbody>
            </table>
            </div>`
        }
        $('#textoHabilidade').append(texto)
        $('#modal-herois').modal('show')

    })
    $('.btn-Q').click(function(e) {
        e.preventDefault()
        var idHeroi = $(this).attr('id')
        $('#textoHabilidade').empty()
        if (idHeroi == 'paladino') {
            var texto = `<h5 id="tituloHabilidade">Luz sagrada ou Holy Ligh<strong>t</strong></h5>
            <p>Uma luz sagrada que pode curar uma unidade viva amiga ou danificar uma unidade morta-viva inimiga.
            </p>
            <p>Não pode ser lançada sobre si mesmo.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">65</th>
                        <th scope="col" class="text-center">5 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Cura 200 de vida OU dá 100 de dano em uma unidade morto-vivo inimiga.</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">65</th>
                        <th scope="col" class="text-center">5 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Cura 400 de vida OU dá 200 de dano em uma unidade morto-vivo inimiga.</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">65</th>
                        <th scope="col" class="text-center">5 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Cura 600 de vida de uma unidade aliada OU da 300 de dano em uma unidade morto-vivo inimiga.</th>
                    </tr>
                </tbody>
            </table>`
        } else if (idHeroi == 'arquimago') {
            var texto = `<h5 id="tituloHabilidade">Tempesdade de gelo ou<strong>B</strong>lizzard</h5>
            <p>Invoca chuvas de fragmentos de gelo congelados que danificam unidades em uma área-alvo.</p>
            <p>É uma habilidade canalizada, então o Arquimago precisa ficar parado para conjurar. Efeitos de stun também pode mcancelar a habilidade</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">75 de mana</th>
                        <th scope="col" class="text-center">6 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">6 ondas com 30 de dano cada, 150 de dano máximo por onda</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">75 de mana</th>
                        <th scope="col" class="text-center">8 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">8 ondas com 40 de dano cada, 200 de dano máximo por onda</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">75 de mana</th>
                        <th scope="col" class="text-center">10 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">10 ondas com 30 de dano cada, 250 de dano máximo por onda</th>
                    </tr>
                </tbody>
            </table>
            </div>`
        }
        $('#textoHabilidade').append(texto)
    })

    $('.btn-W').click(function(e) {
        e.preventDefault()
        var idHeroi = $(this).attr('id')
        $('#textoHabilidade').empty()
        if (idHeroi == 'paladino') {
            var texto = `<h5 id="tituloHabilidade">	Escudo Divino ou <strong>D</strong>ivine Shield</h5>
            <p>Um escudo impenetrável cerca o Paladino, protegendo-o de todos os danos e feitiços por um período determinado.
            </p>
            <p>Escudo Divino não pode ser desativado.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">25 de mana</th>
                        <th scope="col" class="text-center">35 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Invulnerabilidade por 15 segundos</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">25 de mana</th>
                        <th scope="col" class="text-center">50 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Invulnerabilidade por 30 segundos</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">25 de mana</th>
                        <th scope="col" class="text-center">65 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">Invulnerabilidade por 45 segundos</th>
                    </tr>
                </tbody>
            </table>`
        } else if (idHeroi == 'arquimago') {
            var texto = `<h5 id="tituloHabilidade">Evocar elemental da água ou<strong>W</strong>ater Elemental</h5>
            <p>Evoca um Elemental da Água para atacar os inimigos do Archmage.</p>
            <p>É uma unidade controlável de longo alcance que pode atacar unidades aéreas.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">125 de mana</th>
                        <th scope="col" class="text-center">60 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">525 pontos de vida, dano leve </th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">125 de mana</th>
                        <th scope="col" class="text-center">60 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">675 pontos de vida, dano moderado</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">125 de mana</th>
                        <th scope="col" class="text-center">60 segundos</th>
                        <th scope="col" class="text-center" style="font-size: small;">900 pontos de vida, dano pesado</th>
                    </tr>
                </tbody>
            </table>
            </div>`
        }
        $('#textoHabilidade').append(texto)
    })

    $('.btn-E').click(function(e) {
        e.preventDefault()
        var idHeroi = $(this).attr('id')
        $('#textoHabilidade').empty()
        if (idHeroi == 'paladino') {
            var texto = `<h5 id="tituloHabilidade">Aura da devoção ou Devotion Aura</h5>
            <p>Fornece uma aura de armadura para unidades aliadas próximas.
            </p>
            <p>Funciona como efeito passivo,  não precisa ser ativado. Depois de upado a habilidade fica eternamente.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">Nenhum</th>
                        <th scope="col" class="text-center">Não possui</th>
                        <th scope="col" class="text-center" style="font-size: small;">Fornece +1,5 de armadura para todas as unidades aliadas próximas ao heroi.</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">Nenhum</th>
                        <th scope="col" class="text-center">Não possui</th>
                        <th scope="col" class="text-center" style="font-size: small;">Fornece +3 de armadura para todas as unidades aliadas próximas ao heroi.</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">Nenhum</th>
                        <th scope="col" class="text-center">Não possui</th>
                        <th scope="col" class="text-center" style="font-size: small;">Fornece +4,5 de armadura para todas as unidades aliadas próximas ao heroi.</th>
                    </tr>
                </tbody>
            </table>`

        } else if (idHeroi == 'arquimago') {
            var texto = `<h5 id="tituloHabilidade">Brilho Aura ou Brilliance Aura</h5>
            <p>Dá regeneração de mana adicional a unidades amigas próximas.            </p>
            <p>>Funciona como efeito passivo,  não precisa ser ativado. Depois de upado a habilidade fica eternamente.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">Nenhum</th>
                        <th scope="col" class="text-center">Não possui</th>
                        <th scope="col" class="text-center" style="font-size: small;">Adiciona 0,75 de mana por segundo. </th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">2</th>
                        <th scope="col" class="text-center">Nenhum</th>
                        <th scope="col" class="text-center">Não possui</th>
                        <th scope="col" class="text-center" style="font-size: small;">Adiciona 1,5 de mana por segundo.</th>
                    </tr>
                    <tr>
                        <th scope="col" class="text-center">3</th>
                        <th scope="col" class="text-center">Nenhum</th>
                        <th scope="col" class="text-center">Não possui</th>
                        <th scope="col" class="text-center" style="font-size: small;">Adiciona 2,25 de mana por segundo.</th>
                    </tr>
                </tbody>
            </table>
            </div>`
        }
        $('#textoHabilidade').append(texto)
    })

    $('.btn-R').click(function(e) {
        e.preventDefault()
        var idHeroi = $(this).attr('id')
        $('#textoHabilidade').empty()
        if (idHeroi == 'paladino') {
            var texto = `<h5 id="tituloHabilidade">Ressurreição ou Resurrection</h5>
            <p>traz de volta à vida os cadáveres de 6 unidades próximas amigáveis. O feitiço escolherá os cadáveres mais poderosos para ressuscitar se houver mais de 6.
            </p>
            <p>Só pode funcionar caso haja cadáveres de aliados por perto, apenas unidades terrestres deixam um corpo utilizável. Exceto algumas unidades ou casos de morte específica não deixam cadáver.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">200</th>
                        <th scope="col" class="text-center">240</th>
                        <th scope="col" class="text-center">Ressuscita até 6 cadáveres de unidades aliadas próximas ao heroi.</th>
                    </tr>
                </tbody>
            </table>`
        } else if (idHeroi == 'arquimago') {
            var texto = `<h5 id="tituloHabilidade">Teleporte em Massa ou Mass <strong>T</strong>eleport</h5>
            <p>Teleporta 24 de unidades próximas do jogador, incluindo o Archmage, para uma unidade de terra amigável ou estrutura.
            </p>
            <p>A unidade ou estrutura para a qual se teletransportará fica paralizada, parando de produzir ou se mover/atacar. O arquimago também precisa canalizar para se teletransportar.</p>
            <table class="table table-responsive-sm" id="table-habilidades">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="text-center">Nível da Habilidade</th>
                        <th scope="col" class="text-center">Custo</th>
                        <th scope="col" class="text-center">Recarga</th>
                        <th scope="col" class="text-center">Efeito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col" class="text-center">1</th>
                        <th scope="col" class="text-center">100 de mana</th>
                        <th scope="col" class="text-center">20 segundos</th>
                        <th scope="col" class="text-center"Teletransporta até 24 unidades</th>
                    </tr>
                </tbody>
            </table>`
        }

        $('#textoHabilidade').append(texto)
    })

})