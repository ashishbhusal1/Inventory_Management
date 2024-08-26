/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname:"s3-inventory-management-buck.s3.ap-south-1.amazonaws.com",
                port:"",
                pathname:"/**"
            }
        ]
    }
};

export default nextConfig;
