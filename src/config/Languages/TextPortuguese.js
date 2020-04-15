import { SITE_NAME } from 'config/infos';

export const TextPortuguese = {
    SITE_NAME,
    BAG: {
        BAG: 'Bolsa',
        NO_NAME: 'Sem nome',
        OF: 'De',
        PER: 'Por',
        OR: 'Ou',
        ON_DEPOSIT: 'No depósito',
        DO_YOU_WANT: 'Você quer?',
        CLICK_HERE: 'Clique aqui',
    },
    LOADING: {
        TITLE: 'Carregando',
    },
    COPYRIGHT: {
        TITLE: `Copyright © ${SITE_NAME} - Todos os direitos reservados`,
        SUBTITLE: `Desenvolvido por`,
    },
    BUTTON: {
        OPTIONAL: 'Opcional',
    },
    REMOVE_CONTAINER: {
        TITLE: 'Quer mesmo remover?',
        REMOVE: 'Sim',
        CANCEL: 'Não',
    },
    TEXT_EDITOR: {
        OPTIONAL: 'Opcional',
    },
    MENU_PAGES_AUTH: {
        BUTTON_HOME: 'Início',
        BUTTON_STUDENTS: 'Alunos',
        BUTTON_BAG: 'Bolsas',
        BUTTON_MEDIA: 'Mídias',
        BUTTON_PROFILE: 'Perfil',
        BUTTON_COURSE: 'Cursos',
        BUTTON_SOCIAL_NETWORK: 'Redes sociais',
        BUTTON_LOGOUT: 'Sair',
    },
    PAGE_LOGON: {
        TITLE: `Bem-vindo ao painel!`,
    },
    PAGE_NOT_FOUND: {
        TITLE: 'Desculpe, mas não consegui encontrar essa página.',
        OOPS: 'Ooops!',
        BUTTON_HOME: 'Início',
    },
    LIST: {
        NOT_FOUND: 'Me desculpa, não encontrei ninguém.',
    },
    PAGE_AUTH_HOME: {
        HOME: {
            TITLE: 'Informações do sistema',
            LOADING: 'Buscando...',
            COUNT_BAGS: 'Bolsas',
            COUNT_COURSES: 'Cursos',
            COUNT_MEDIAS: 'Mídias',
            COUNT_SOCIAL_NETWORKS: 'Redes sociais',
            COUNT_STUDENTS: 'Alunos',
            COUNT_STUDENTS_COURSE: 'Alunos em cursos',
        },
    },
    PAGE_AUTH_COURSES: {
        HOME: {
            TITLE: 'Cursos',
            SUBTITLE: 'Quantidade de cursos:',
            LOADING_TOTAL_ITEMS: 'Contando...',
            BUTTON_VIEW: 'Ver detalhes',
            BUTTON_REMOVE_CANCEL: 'Cancelar',
            BUTTON_REMOVE_CONFIRM: 'Confirmar remoção',
            BUTTON_REMOVE: 'Remover',
            BUTTON_LOAD_MORE: 'Carregar mais',
        },
        ADD: {
            TITLE: 'Adicione um novo curso',
        },
        MENU: {
            BUTTON_HOME: 'Cursos',
            BUTTON_ADD: 'Adicionar curso',
        },
    },
    PAGE_AUTH_COURSE: {
        STRUCT: {
            NOT_FOUND: 'Curso não encontrado.',
        },
        HOME: {
            TITLE: 'Home page',
            PURCHASE_BUTTON: 'Link de compra',
        },
        VIDEOS: {
            TITLE: 'Quantidade de vídeos:',
            ADD_VIDEO: 'Adicionar video',
            BUTTON_REMOVE_CANCEL: 'Cancelar',
            BUTTON_REMOVE_CONFIRM: 'Confirmar remoção',
            BUTTON_REMOVE: 'Remover',
            BUTTON_VIEW: 'Ver detalhes',
        },
        STUDENTS: {
            TITLE: 'Quantidade de alunos:',
            ADD_STUDENT: 'Adicionar aluno',
            LOAD_MORE: 'Ver mais',
            BUTTON_REMOVE_CANCEL: 'Cancelar',
            BUTTON_REMOVE_CONFIRM: 'Confirmar remoção',
            BUTTON_REMOVE: 'Remover',
        },
        CREATE_ACCESS: {
            TITLE: 'Quantidade de códigos de acesso:',
            ADD_ACCESS: 'Criar acesso',
            LOAD_MORE: 'Ver mais',
            PENDING: 'Pendente',
            FINISHED: 'Concluso',
            CANCELED: 'Cancelado',
            LINK: 'Link:',
            CODE: 'Código',
            NEW_ITEM: 'Novo',
            COURSE_TITLE: 'Curso:',
            ADDED_USER: 'Usuário adicionado:',
        },
        SETTINGS: {
            TITLE: 'Configurações page',
        },
        MENU: {
            BUTTON_HOME: 'Início',
            BUTTON_VIDEOS: 'Videos',
            BUTTON_STUDENTS: 'Alunos',
            BUTTON_CREATE_ACCESS: 'Gerar acesso',
            BUTTON_SETTINGS: 'Configurações',
        },
    },
    PAGE_AUTH_BAG: {
        MENU: {
            BUTTON_HOME: 'Bolsas',
            BUTTON_ADD: 'Adicionar bolsa',
            BUTTON_UPDATE_POSITION: 'Alterar ordem',
        },
        ADD: {
            TITLE: 'Adicione um nova bolsa',
            SUBTITLE: 'Clique nas bolsas para saber mais informações.',
        },
        HOME: {
            TITLE: 'Bolsas',
            SUBTITLE: 'Clique nas bolsas para saber mais informações.',
            BUTTON_REMOVE: 'Remover',
            BUTTON_UPDATE: 'Editar',
        },
        UPDATE_POSITION: {
            TITLE: 'Altere a ordem das bolsas',
            SUBTITLE: 'Clique na bolsa e arraste para onde quer colocá-la.',
        },
        INFO: {
            NOT_FOUND: 'Bolsa não encontrada!',
        },
        UPDATE: {
            TITLE: 'Altere as informações da bolsa',
            SUBTITLE: 'Abaixo você verá a pré visualização de como a bolsa ficará e o formulário de alteração dela.',
            NOT_FOUND: 'Bolsa não encontrada!',
        },
    },
    PAGE_AUTH_STUDENTS: {
        HEADER : {
            TITLE: 'Alunos', 
            SUBTITLE: 'Quantidade de alunos:',
            LOADING: 'Contando...',
        },
        BODY : {
            NOT_FOUND_TITLE: 'Nenhum aluno encontrado.',
        },
        FOOTER : {
            BUTTON_LOAD_MORE: 'Carregar mais',
        },
    },
    PAGE_AUTH_PROFILE: {
        HEADER : {
            TITLE: 'Meu perfil',
        },
        MENU : {
            BUTTON_HOME: 'Início',
            BUTTON_UPDATE_PASSWORD: 'Alterar senha',
        },
    },
    PAGE_AUTH_MEDIA: {
        MENU: {
            BUTTON_HOME: 'Mídias',
            BUTTON_ADD: 'Adicionar',
            BUTTON_UPDATE_POSITION: 'Alterar ordem',
        },
        ADD: {
            TITLE: 'Adicione uma nova mídia',
        },
        HOME: {
            TITLE: 'Mídias',
            BUTTON_REMOVE: 'Remover',
        },
        UPDATE_POSITION: {
            TITLE: 'Altere a ordem das mídias',
            SUBTITLE: 'Clique na mídia e arraste para onde quer colocá-la.',
        },
    },
    PAGE_AUTH_SOCIAL_NETWORK: {
        MENU: {
            BUTTON_HOME: 'Rede sociais',
            BUTTON_ADD: 'Adicionar',
            BUTTON_UPDATE_POSITION: 'Alterar ordem',
        },
        ADD: {
            TITLE: 'Adicione uma nova rede social',
        },
        HOME: {
            TITLE: 'Rede sociais',
            BUTTON_REMOVE: 'Remover',
        },
        UPDATE_POSITION: {
            TITLE: 'Altere a ordem das rede sociais',
            SUBTITLE: 'Clique na rede social e arraste para onde quer colocá-la.',
        },
    },
    FORM_LOGON: {
        TITLE: 'Login',
        EMAIL: 'E-mail',
        PASSWORD: `Senha`,
        BUTTON_SUBMIT: 'Entrar',
        LOGIN_ERROR: 'Login inválido, verifique seus dados.',
    },
    FORM_UPDATE_PASSWORD: {
        PASSWORD: `Senha atual`,
        NEW_PASSWORD: `Nova senha`,
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS: 'Atualizado com sucesso.',
        ERROR: 'Erro ao atualizar, verifique seus dados.',
    },
    FORM_ADD_COURSE_STUDENT: {
        TITLE: 'Adicione um novo aluno',
        SUBTITLE: 'O aluno deve estar cadastrado no sistema.',
        EMAIL: 'E-mail do aluno',
        BUTTON_SUBMIT: 'Adicionar',
        SUCCESS: 'Adicionado com sucesso.',
        ERROR: 'Erro ao adicionar o aluno, verifique seus dados.',
    },
    FORM_UPDATE_POSITION_BAGS: {
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar a ordem das bolsas, por favor tente novamente mais tarde.',
    },
    FORM_UPDATE_POSITION_MEDIAS: {
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar a ordem das mídias, por favor tente novamente mais tarde.',
    },
    FORM_UPDATE_POSITION_SOCIAL_NETWORKS: {
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar a ordem das redes sociais, por favor tente novamente mais tarde.',
    },
    FORM_UPDATE_BAG: {
        NAME: 'Nome da bolsa',
        TOTAL_PRICE: 'Preço total',
        DISCOUNT_PRICE: 'Preço com desconto',
        INSTALLMENTS: 'Quantidade de parcelas',
        INSTALLMENTS_PRICE: 'Preço das parcelas',
        DEPOSIT: 'Valor no depósito',
        LINK: 'Link da bolsa',
        BUTTON_FIRST_IMAGE: 'Primeira foto',
        BUTTON_SECOND_IMAGE: 'Segunda foto',
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar, por favor tente novamente mais tarde.',
        NOT_FOUND: 'Bolsa não encontrada.',
    },
    FORM_ADD_BAG: {
        NAME: 'Nome da bolsa',
        TOTAL_PRICE: 'Preço total',
        DISCOUNT_PRICE: 'Preço com desconto',
        INSTALLMENTS: 'Quantidade de parcelas',
        INSTALLMENTS_PRICE: 'Preço das parcelas',
        DEPOSIT: 'Valor no depósito',
        LINK: 'Link da bolsa',
        BUTTON_FIRST_IMAGE: 'Escolher primeira foto',
        BUTTON_SECOND_IMAGE: 'Escolher segunda foto',
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Adicionado com sucesso.',
        ERROR_UPDATE: 'Erro ao adicionar, por favor tente novamente mais tarde.',
    },
    FORM_ADD_MEDIA: {
        LINK: 'Link da mídia',
        BUTTON_IMAGE: 'Buscar foto da mídia',
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Adicionada com sucesso.',
        ERROR_UPDATE: 'Erro ao adicionar, por favor tente novamente mais tarde.',
    },
    FORM_ADD_SOCIAL_NETWORK: {
        LINK: 'Link da rede social',
        BUTTON_IMAGE: 'Buscar foto da rede social',
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Adicionada com sucesso.',
        ERROR_UPDATE: 'Erro ao adicionar, por favor tente novamente mais tarde.',
    },
    FORM_ADD_COURSE: {
        NAME: 'Nome do curso',
        DESCRIPTION: 'Descrição',
        PURCHASE_LINK: 'Link de compra do curso',
        BUTTON_IMAGE: 'Escolha uma foto de capa',
        BUTTON_SUBMIT: 'Adicionar',
        BUTTON_CANCEL: 'Cancelar',
        BUTTON_VIEW: 'Entrar',
        SUCCESS_UPDATE: 'Adicionado com sucesso.',
        ERROR_UPDATE: 'Erro ao adicionar, por favor tente novamente mais tarde.',
    },
    FORM_ADD_COURSE_VIDEO: {
        NAME: 'Título do video',
        DESCRIPTION: 'Descrição',
        BUTTON_VIDEO: 'Escolha o video',
        BUTTON_SUBMIT: 'Adicionar',
        BUTTON_BACK: 'Voltar',
        SUCCESS_UPDATE: 'Adicionado com sucesso.',
        ERROR_UPDATE: 'Erro ao adicionar, por favor tente novamente mais tarde.',
    },
    FORM_UPDATE_COURSE: {
        NAME: 'Nome do curso',
        DESCRIPTION: 'Descrição',
        PURCHASE_LINK: 'Link de compra',
        BUTTON_IMAGE: 'Escolher foto de perfil',
        BUTTON_SUBMIT: 'Atualizar',
        BUTTON_CANCEL: 'Cancelar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar, por favor tente novamente mais tarde.',
    },
    FORM_UPDATE_ADMIN: {
        NAME: 'Nome',
        LASTNAME: 'Sobrenome',
        BUTTON_IMAGE: 'Escolher foto de perfil',
        BUTTON_SUBMIT: 'Atualizar',
        BUTTON_CANCEL: 'Cancelar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar, por favor tente novamente mais tarde.',
    },
    FORM_UPDATE_COURSE_VIDEO: {
        NAME: 'Título do video',
        NOT_FOUND_TITLE: 'Desculpe, não encontrei o que você queria.',
        DESCRIPTION: 'Descrição',
        BUTTON_SUBMIT: 'Salvar',
        SUCCESS_UPDATE: 'Atualizado com sucesso.',
        ERROR_UPDATE: 'Erro ao atualizar, por favor tente novamente mais tarde.',
    },
};

export default TextPortuguese;