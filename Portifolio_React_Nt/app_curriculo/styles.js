import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#000000', // Cor de fundo geral (preto)
  },
  menu: {
    backgroundColor: '#0056b3', // Cor de fundo da barra lateral (azul escuro)
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '40%', // Aumentei a largura para 40%
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ffffff', // Cor do título da barra lateral
  },
  botaoMenu: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 50 : 70,
    left: 10,
    zIndex: 2,
    backgroundColor: 'transparent',
    padding: 10,
  },
  textoBotaoMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // Cor do texto do botão de menu
  },
  containerPagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000000', // Cor de fundo geral (preto) // Cor de fundo do conteúdo principal
  },
  imagemPerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  informacoes: {
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    flexWrap: 'wrap',
    color: '#ffffff', // Cor do texto no conteúdo principal
  },
});
