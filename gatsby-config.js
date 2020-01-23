module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/dtlmd/714c9b176f5440328fdbc661f38a130f?v=4c6d0546b9ac4aaaaa9fe80418dc8024"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/dtlmd/0a2226a9cbd64d9ca3b7146116e61f96?v=cc15bd33352e484897c4562e29c577ee"
            }
        }
    ],
}
