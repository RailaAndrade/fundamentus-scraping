const puppeteer = require('puppeteer');
const fs = require('fs');

const selector = '.w728';
async function go() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.fundamentus.com.br/resultado.php');
        //await page.screenshot({ path: 'example.png' });
        const list = await page.evaluate(() => {

            const tds = Array.from(document.querySelectorAll('tbody tr td:first-child '));
            return tds.map(td => td.innerText);

        })



        /*fs.writeFile('array.json', JSON.stringify(list, null, 2), err => {
            if (err) throw new Error('something went wrong')
        })*/

        await browser.close();
        return list
    } catch (e) {
        console.log(e);
    }

};
(async () => {

    try{
    const list2 = await go();
    const list3 = [];
    const size = list2.length -1

    for (let i = 0; i < size ; i++) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://www.fundamentus.com.br/detalhes.php?papel=' + list2[i]);
        //await page.screenshot({ path: 'example.png' });


        const papela = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(1) td:nth-child(2)').textContent);
        const Tipo = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(2) td:nth-child(2)').textContent);
        const Empresa = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(3) td:nth-child(2)').textContent);
        const Setor = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(4) td:nth-child(2)').textContent);
        const Subsetor = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(5) td:nth-child(2)').textContent);
        const cotacao = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(1) td:nth-child(4)').textContent);
        const Dataultcot = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(2) td:nth-child(4)').textContent);
        const Min52sem = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(3) td:nth-child(4)').textContent);
        const Max52sem = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(4) td:nth-child(4)').textContent);
        const Volmed2m = await page.evaluate(() => document.querySelector('table:nth-child(2) tr:nth-child(5) td:nth-child(4)').textContent);

        const Valordemercado = await page.evaluate(() => document.querySelector('table:nth-child(3) tr:nth-child(1) td:nth-child(2)').textContent);
        const Valordafirma = await page.evaluate(() => document.querySelector('table:nth-child(3) tr:nth-child(2) td:nth-child(2)').textContent);
        const Ultbalançoprocessado = await page.evaluate(() => document.querySelector('table:nth-child(3) tr:nth-child(1) td:nth-child(4)').textContent);
        const nroacoes = await page.evaluate(() => document.querySelector('table:nth-child(3) tr:nth-child(2) td:nth-child(4)').textContent);

        const pl = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(2) td:nth-child(4)').textContent);
        const pvp = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(3) td:nth-child(4)').textContent);
        const pebit = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(4) td:nth-child(4)').textContent);
        const psr = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(5) td:nth-child(4)').textContent);
        const PAtivos = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(6) td:nth-child(4)').textContent);
        const PCapGiro = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(7) td:nth-child(4)').textContent);
        const PAtivCircLiq = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(8) td:nth-child(4)').textContent);
        const DivYield = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(9) td:nth-child(4)').textContent);
        const EVEBITDA = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(10) td:nth-child(4)').textContent);
        const EVEBIT = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(11) td:nth-child(4)').textContent);
        const CresRec5a = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(12) td:nth-child(4)').textContent);

        const lpa = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(2) td:nth-child(6)').textContent);
        const vpa = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(3) td:nth-child(6)').textContent);
        const MargBruta = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(4) td:nth-child(6)').textContent);
        const MargEBIT = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(5) td:nth-child(6)').textContent);
        const MargLiquida = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(6) td:nth-child(6)').textContent);
        const EBITAtivo = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(7) td:nth-child(6)').textContent);
        const ROIC = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(8) td:nth-child(6)').textContent);
        const ROE = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(9) td:nth-child(6)').textContent);
        const LiquidezCorr = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(10) td:nth-child(6)').textContent);
        const DivBrPatrim = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(11) td:nth-child(6)').textContent);
        const GiroAtivos = await page.evaluate(() => document.querySelector('table:nth-child(4) tr:nth-child(12) td:nth-child(6)').textContent);

        const Ativo = await page.evaluate(() => document.querySelector('table:nth-child(5) tr:nth-child(2) td:nth-child(2)').textContent);
        const Disponibilidades = await page.evaluate(() => document.querySelector('table:nth-child(5) tr:nth-child(3) td:nth-child(2)').textContent);
        const AtivoCirculante = await page.evaluate(() => document.querySelector('table:nth-child(5) tr:nth-child(4) td:nth-child(2)')?.textContent);
        const DivBruta = await page.evaluate(() => document.querySelector('table:nth-child(5) tr:nth-child(2) td:nth-child(4)').textContent);
        const DivLiquida = await page.evaluate(() => document.querySelector('table:nth-child(5) tr:nth-child(3) td:nth-child(4)').textContent);
        const PatrimLiq = await page.evaluate(() => document.querySelector('table:nth-child(5) tr:nth-child(4) td:nth-child(4)')?.textContent);


        const RL12 = await page.evaluate(() => document.querySelector('table:nth-child(6) tr:nth-child(3) td:nth-child(2)').textContent);
        const EBIT12 = await page.evaluate(() => document.querySelector('table:nth-child(6) tr:nth-child(4) td:nth-child(2)').textContent);
        const LL12 = await page.evaluate(() => document.querySelector('table:nth-child(6) tr:nth-child(5) td:nth-child(2)').textContent);
        const RL3 = await page.evaluate(() => document.querySelector('table:nth-child(6) tr:nth-child(3) td:nth-child(4)').textContent);
        const EBIT3 = await page.evaluate(() => document.querySelector('table:nth-child(6) tr:nth-child(4) td:nth-child(4)').textContent);
        const LL3 = await page.evaluate(() => document.querySelector('table:nth-child(6) tr:nth-child(5) td:nth-child(4)').textContent);

        
        /*const list4 = await page.evaluate(() => {
            const tds = Array.from(document.querySelectorAll('tbody tr td[class="data w35"]'));
            const nome = tds.map(td => td.innerText);

            const t = Array.from(document.querySelectorAll('tbody tr td[class="data destaque w3"]'));
            const cotacao = t.map(td => td.innerText);

            return {
                nome,
                cotacao
            }

        })

        */


        list3.push(
            {
                       

                "Papel":papela,
                "Tipo": Tipo,
                "Empresa":Empresa,
                "Setor": Setor,
                "Subsetor": Subsetor,
                "Cotação":cotacao,
                "Data últ cot": Dataultcot,
                "Min 52 sem":Min52sem,
                "Max 52 sem": Max52sem,
                "Vol $ méd (2m)": Volmed2m,

                "Valor de mercado": Valordemercado,
                "Valor da firma": Valordafirma,
                "Ult balanço processado": Ultbalançoprocessado,
                "Nro. Ações": nroacoes,

                "PL": pl,
                "P/VP": pvp,
                "P/EBIT": pebit.trim(),
                "PSR": psr.trim(),
                "PAtivos": PAtivos.trim(),
                "PCapGiro": PCapGiro.trim(),
                "PAtivCircLiq": PAtivCircLiq.trim(),
                "DivYield": DivYield,
                "EVEBITDA": EVEBITDA.trim(),
                "EVEBIT": EVEBIT.trim(),
                "CresRec5a": CresRec5a.trim(),

                "LPA": lpa,
                "vpa": vpa,
                "MargBruta": MargBruta.trim(),
                "MargEBIT": MargEBIT.trim(),
                "MargLiquida": MargLiquida.trim(),
                "EBITAtivo": EBITAtivo,
                "ROIC": ROIC.trim(),
                "ROE": ROE.trim(),
                "LiquidezCorr": LiquidezCorr.trim(),
                "DivBrPatrim": DivBrPatrim.trim(),
                "GiroAtivos": GiroAtivos.trim(),

                "Ativo": Ativo,
                "Disponibilidades":Disponibilidades,
                "AtivoCirculante":AtivoCirculante,
                "Dív. Bruta":DivBruta,
                "Dív. Líquida":DivLiquida,
                "Patrim. Líq":PatrimLiq,

                "Receita Líquida 12 meses":RL12,
                "EBIT 12 meses":EBIT12,
                "Lucro Líquido 12 meses":LL12,
                "Receita Líquida 3 meses":RL3,
                "EBIT 3 meses":EBIT3,
                "Lucro Líquida 3 meses":LL3,
            
            }
        )


        await browser.close();
    }

    fs.writeFile('array.json', JSON.stringify(list3, null, 2), err => {
        if (err) throw new Error('something went wrong')
    })
    
    } catch (e) {
        console.log(e);
    }
})();