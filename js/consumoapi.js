 'use strict'

const escolherCurso = async() =>{

    const url = `https://projeto-lions.netlify.app/.netlify/functions/api/cursos`

    const response = await fetch(url)

    const listaCursos = await response.json()

    return listaCursos.cursos
}

const listarEstudantes = async(curso) => {

    const url = `https://projeto-lions.netlify.app/.netlify/functions/api/alunos/?courseNome=${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos.alunos

}
const getAlunosStatus = async (status) => {

    const url = `https://projeto-lions.netlify.app/.netlify/functions/api/alunos/?statusNome=${status}`

    const response = await fetch(url)

    const statusAlunos = await response.json()

    return statusAlunos
}

const getAlunoMatricula = async (matricula) => {

    const url = `https://projeto-lions.netlify.app/.netlify/functions/api/alunos/?matriculaNumber=${matricula}`

    const response = await fetch(url)

    const aluno = await response.json()

    return aluno.aluno
}

const getAlunosCurso = async (curso) => {

    const url = `https://projeto-lions.netlify.app/.netlify/functions/api/alunos/?courseName=${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos
}

export{
    escolherCurso,
    listarEstudantes,
    getAlunoMatricula,
    getAlunosCurso,
    getAlunosStatus
    
}