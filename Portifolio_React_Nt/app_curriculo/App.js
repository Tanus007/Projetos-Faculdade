import React from 'react';
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { styles } from './styles'; // Importando o arquivo de estilos

const MenuLateral = ({ onPress }) => {
  return (
    <View style={styles.menu}>
      <Text style={styles.menuTitle}>Menu</Text>
      <TouchableOpacity onPress={() => onPress('informacoes')}>
        <Text>Informações Pessoais</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('projetos')}>
        <Text>Projetos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('experiencias')}>
        <Text>Experiências</Text>
      </TouchableOpacity>
    </View>
  );
};


const InformacoesPessoais = () => {
  return (
    <View style={styles.containerPagina}>
    <View style={styles.containerPagina}>
      <Image
        source={require('C:\Users\Tanus_h\Desktop\Faculdade\Mobile_Geraldo\app_curriculo\Foto.jpg')} 
        style={styles.imagemPerfil} 
      />
    </View>
      <View style={styles.informacoes}>
        <Text style={styles.texto}>Nome: Tanus Henrique Leal Correa</Text>
        <Text style={styles.texto}>Endereço: Rua Eurico de Souza Leão, 290</Text>
        <Text style={styles.texto}>Idade: 20</Text>
      </View>
    </View>
  );
};

const Projetos = () => {
  return (
    <View style={styles.containerPagina}>
       <Text style={styles.texto}>projeto mobile fitbuy</Text>
        <Text style={styles.texto}>Automação Python + selenium</Text>
        <Text style={styles.texto}>curriculo em react native</Text>
    </View>
  );
};

const Experiencias = () => {
  return (
    <View style={styles.containerPagina}>
        <Text style={styles.texto}>estou estagiando na Queiroz cavalcanti advocacia no nucleo de operaçoes </Text>

    </View>
  );
};

export default function App() {
  const [pagina, setPagina] = React.useState('informacoes');
  const [menuAberto, setMenuAberto] = React.useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const renderizarPagina = () => {
    switch (pagina) {
      case 'informacoes':
        return <InformacoesPessoais />;
      case 'projetos':
        return <Projetos />;
      case 'experiencias':
        return <Experiencias />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.botaoMenu}>
        <Text style={styles.textoBotaoMenu}>{menuAberto ? 'Fechar Menu' : 'Abrir Menu'}</Text>
      </TouchableOpacity>
      {menuAberto && <MenuLateral onPress={(pagina) => {setPagina(pagina); toggleMenu();}} />}
      <View style={styles.containerPagina}>
        {renderizarPagina()}
      </View>
    </View>
  );
}
