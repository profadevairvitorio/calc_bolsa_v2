function contarDiasUteisMesCorrente() {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth();
  
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0); 
  
    let diasUteis = 0;
  
    for (let dia = primeiroDia; dia <= ultimoDia; dia.setDate(dia.getDate() + 1)) {
      const diaSemana = dia.getDay(); 
      if (diaSemana >= 1 && diaSemana <= 5) { 
        diasUteis++;
      }
    }
  
    return diasUteis;
  }


function calcular(){
    let qntd_dias = Number(document.getElementById('qntd_dias').value)
    let valor_bolsa = Number(document.getElementById('valor_bolsa').value)

    let qnt_faltas = qntd_dias * 4
    let presenca_total = contarDiasUteisMesCorrente() * 4
    let percentual_faltas = (qnt_faltas/presenca_total)*100
    let percentual_presenca = 100 - percentual_faltas
    let valor_que_vou_receber = 0

    if (percentual_presenca >= 75) {
        valor_que_vou_receber = valor_bolsa
    } else if(percentual_presenca >= 60 && percentual_presenca < 75){
        valor_que_vou_receber = valor_bolsa - 100
    } else if(percentual_presenca >= 40 && percentual_presenca < 60 ) {
        valor_que_vou_receber = valor_bolsa - 100
    } else {
        valor_que_vou_receber
    }


    let resultado = "Você vai receber: R$" + valor_que_vou_receber
    alert(resultado)

    console.log(qnt_faltas)
    console.log(presenca_total)
    console.log(percentual_faltas)

}
