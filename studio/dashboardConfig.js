export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd51d9975838f9e59381832',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s4fstvbg',
                  apiId: 'a752fc29-65a7-4be3-b7ab-9bd1b0b08a61'
                },
                {
                  buildHookId: '5dd51d99294956c6adee8059',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d27ydphh',
                  apiId: 'c447d337-b3d3-433f-9d56-e47e9bedeb9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sondrehd/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d27ydphh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
