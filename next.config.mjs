/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output:"export",
  reactCompiler: true,
  images:{
    unoptimized:true,
  },
  basePath:"/Gaming_Website",

  assetPrefix:"/Gaming_Website/"
};

export default nextConfig;
