export type InvalidDocuments = {
  "cr/60": string
  "cr/n": string
  "cr/dsc": string
  "dr/n": string
  "id/n": string
  "cns/n": string
  "estc/nd": string
  "cerc/n": string
  "cav/n": string
  "un/n": string
  "inv/nc": string
  "dsvu/n": string
  "deco/n": string
  "dp/21": string
  "dep/id/n": string
  "dep/id/10": string
  "cnh/n": string
  "cnh/ce": string
  "cnh/cnh": string
  "cnd/n": string
  "pinv/sl": string
  "pinv/cld": string
  "res/n": string
}

const invalidStandard: InvalidDocuments = {
  "cr/60": `Comprovante de residência emitido a partir de agosto deste ano;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante dentro do prazo acima`,
  "cr/n":
    "Comprovante de Residência atualizado (emitido a partir de agosto/2025) ou declaração conforme modelo que será disponibilizado",
  "cr/dsc":
    "Comprovante de residência emitido nos últimos 60 dias;\nObs: Envie qualquer conta que, mesmo que não esteja em seu nome, coincida com o endereço escrito na declaração de residência enviada",
  "dr/n": `Declaração de Residência (Anexo II no link abaixo)\nObs: Comprovante enviado está em nome de terceiros. Favor, assinar e enviar a declaração acima`,
  "id/n": "Documento de Identidade com número do CPF (RG ou CNH ou Conselho de Classe)",
  "cns/n": "Certidão de Nascimento",
  "estc/nd": `Certidão de acordo com o estado civil:
Casada, Divorciada ou Viúva - Certidão de Casamento (com averbação nos dois últimos casos);
União Estável - Declaração de União Estável ou Declaração de Convivência Marital (com firma reconhecida em cartório);
Solteira - Certidão de nascimento`,
  "cerc/n": "Certidão de Casamento",
  "inv/nc": "Enviar qualquer documento que comprove invalidez do dependente DEP",
  "cav/n": "Certidão de casamento averbada",
  "un/n": "Declaração de União Estável/Convivência Marital com firma reconhecida em cartório",
  "dsvu/n": "Declaração de união estável + Certidão de Casamento averbada",
  "cnh/n": "Carteira Nacional de Habilitação (CNH) e Declaração sobre curso especializado para condutor, se motorista",
  "cnh/ce": "Carteira Nacional de Habilitação (CNH), se motorista",
  "cnh/cnh": "Declaração sobre curso especializado para condutor, se motorista",
  "deco/n": "Enviar declaração de dependência econômica do dependente DEP",
  "pinv/cld": "Aposentadoria por Invalidez - enviar laudo médico atualizado (emitido a partir de agosto/2025)",
  "pinv/sl":
    "Aposentado por Invalidez, enviar laudo médico atualizado (emitido a partir de agosto/2025), o qual será retido no momento do censo",
  "dp/21":
    "Em caso de dependente filho(a) com mais de 18 anos, é necessário que se envie laudo/atestado médico caso declarado inválido. Caso não, remover como dependente previdenciário",
  "dep/id/n": "Enviar documento de identificação dos dependentes DEPS",
  "dep/id/10":
    "Documento de identidade do dependente DEP foi emitido em ANO, ultrapassando o limite de 10 anos desde a data de emissão.\nCaso não haja nenhum outro documento de identidade para substituir (CNH, Conselho de Classe ou Passaporte), por favor, entre em contato com nossa central de suporte informando seu caso",
  "cnd/n": "Enviar certidão de nascimento do dependente DEP",
  "res/n":
    "Apresentar o Certificado de Alistamento Militar ou Reservista, para servidores do sexo masculino, com idade entre 18 e 45 anos",
}

export type InactiveStandard = {
  pis: string
  posse: string
  escolaridade: string
}

export type ActivesStandardType = {
  cpf: string
  pis: string
  posse: string
  cnis: string
  tituloEleitor: string
  registroProfissional: string
  escolaridade: string
  ctps: string
  reservista: string
  uniao: string
  declaracaoSuperior: string
  irpf: string
  criminalFederal: string
  criminalEstadual: string
  negativaEleitoral: string
  acumuloCargo: string
  beneficioInss: string
}

const activesStandard: ActivesStandardType = {
  cpf: "Apresentar qualquer documento contendo número do CPF",
  pis: "PIS/PASEP ou NIT em qualquer documento que contenha a informação",
  registroProfissional:
    "Comprovante do Registro Profissional para os servidores que ocupam os cargos de médico, arquiteto, assistente social, biomédico, dentista (qualquer especialidade), farmacêutico, fonoaudiólogo, jornalista, nutricionista, psicólogo, engenheiro, advogado, enfermeiro, contador, veterinário e fisioterapeuta",
  declaracaoSuperior:
    "Declaração assinada pelo superior imediato que informe local de trabalho, função e horário de expediente",
  irpf: "Declaração do imposto de renda exercício 2025 ou declaração de isento",
  ctps: "Carteira de Trabalho e Previdência Social",
  criminalFederal: "Certidão Negativa Criminal e Cível da Justiça Federal",
  criminalEstadual: "Certidão Negativa Criminal e Cível da Justiça Estadual",
  negativaEleitoral: "Certidão Negativa da Justiça Eleitoral",
  acumuloCargo: "Declaração de Não Acúmulo de Cargo",
  beneficioInss: "Declaração de Benefício Previdenciário emitida a partir do site meuinss.gov.br",
  tituloEleitor: "Apresentar título de eleitor",
  cnis: "CNIS de período anterior a seu ingresso no município",
  posse: "Enviar documento de Portaria de Posse",
  reservista:
    "Apresentar o Certificado de Alistamento Militar ou Reservista, para servidores do sexo masculino, com idade entre 18 e 45 anos",
  escolaridade: "Enviar documento que comprove escolaridade declarada",
  uniao: "Certidão de União Estável",
}

export { invalidStandard, activesStandard }
