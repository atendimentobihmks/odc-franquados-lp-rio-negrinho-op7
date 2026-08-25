export interface UnitData {
  id: string;
  name: string;
  cnpj?: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  instagramUrl: string;
  facebookUrl: string;
  croCl: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  clinicalDirector: {
    name: string;
    cro: string;
    role: string;
  };
  treatments: Array<{
    id: string;
    title: string;
    description: string;
    iconName: string;
    imageUrl?: string;
  }>;
  images: {
    facade: string;
  };
  dentists: Array<{
    name: string;
    specialty: string;
    cro: string;
    photoUrl: string;
  }>;
  testimonials: Array<{
    name: string;
    rating: number;
    text: string;
    treatment: string;
  }>;
}

export const UNITS_DATA: Record<string, UnitData> = {
  rio_negrinho: {
    id: 'rio_negrinho',
    name: 'Rio Negrinho',
    phone: '(47) 3204-0124',
    whatsapp: '554732040124',
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta de avaliação na OdontoCompany Rio Negrinho.',
    instagramUrl: 'https://www.instagram.com/odontocompanyrionegrinho/',
    facebookUrl: 'https://web.facebook.com/odontocompanyrionegrinho/',
    croCl: 'CRO-SC 15.364',
    address: {
      street: 'Rua Henrique Schwarz',
      number: '46',
      neighborhood: 'Centro',
      city: 'Rio Negrinho',
      state: 'SC',
      zipCode: '89295-000'
    },
    clinicalDirector: {
      name: 'Dra. Andrieli Kobren',
      cro: 'CRO-SC 15364',
      role: 'Responsável Técnico(a) / Direção Clínica'
    },
    treatments: [
      {
        id: '1',
        title: 'Implantes Dentários',
        description: 'Recupere sua autoestima e a capacidade mastigatória com procedimentos modernos, seguros e parcelamento facilitado.',
        iconName: 'Tooth',
        imageUrl: '/images/treatments/implantes.webp'
      },
      {
        id: '2',
        title: 'Ortodontia (Aparelhos)',
        description: 'Alinhamento dentário com aparelhos fixos metálicos, estéticos e os modernos alinhadores transparentes.',
        iconName: 'Sparkles',
        imageUrl: '/images/treatments/aparelhos.webp'
      },
      {
        id: '3',
        title: 'Lentes de Contato Dental',
        description: 'Harmonia, brilho e alinhamento impecável com facetas e lentes de porcelana de alta durabilidade.',
        iconName: 'Diamond',
        imageUrl: '/images/treatments/lentes.webp'
      },
      {
        id: '4',
        title: 'Clareamento Dental',
        description: 'Dentes mais brancos e radiantes com técnicas a laser em consultório ou moldeira caseira supervisionada.',
        iconName: 'Sun',
        imageUrl: '/images/treatments/clareamento.webp'
      },
      {
        id: '5',
        title: 'Próteses Dentárias',
        description: 'Soluções fixas e removíveis com materiais de alto padrão para restabelecer seu sorriso e conforto.',
        iconName: 'Crown',
        imageUrl: '/images/treatments/proteses.webp'
      },
      {
        id: '6',
        title: 'Clínico Geral & Limpeza',
        description: 'Prevenção, profilaxia, restaurações e diagnóstico completo para a manutenção da sua saúde bucal.',
        iconName: 'Stethoscope',
        imageUrl: '/images/treatments/limpeza.webp'
      }
    ],
    images: {
      facade: '/images/fachada.webp'
    },
    dentists: [
      {
        name: 'Dra. Andrieli Kobren',
        specialty: 'Responsável Técnico(a) & Cirurgião(ã) Dentista',
        cro: 'CRO-SC 15364',
        photoUrl: '/images/dentistas/dra-andrieli-kobren.webp'
      }
    ],
    testimonials: [
      {
        name: 'Carlos Alberto M.',
        rating: 5,
        text: 'Excelente atendimento na OdontoCompany Rio Negrinho! A clínica é muito bonita, os profissionais super atenciosos e o tratamento de implante foi super tranquilo.',
        treatment: 'Implante Dentário'
      },
      {
        name: 'Mariana Silveira',
        rating: 5,
        text: 'Coloquei meu aparelho na OdontoCompany Rio Negrinho e já vejo muita diferença no meu sorriso. Facilidade no pagamento e equipe maravilhosa!',
        treatment: 'Ortodontia'
      },
      {
        name: 'Luciana Ramos',
        rating: 5,
        text: 'Fiz clareamento e limpeza preventiva na unidade. Atendimento pontual, ambiente muito limpo e profissionais que passam muita segurança. Recomendo a todos de Rio Negrinho e região.',
        treatment: 'Clareamento Dental'
      }
    ]
  }
};

export const getUnitFromUrl = (): UnitData => {
  return UNITS_DATA.rio_negrinho;
};
