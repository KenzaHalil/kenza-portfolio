const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Génère un site statique
  basePath: '/portfolio', // Remplacez "portfolio" par le nom de votre dépôt GitHub
  assetPrefix: isProd ? '/portfolio/' : '', // Préfixe pour les assets
  eslint: {
    ignoreDuringBuilds: true, // Ignore les avertissements ESLint pendant la génération
  },
};