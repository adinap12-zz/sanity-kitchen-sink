export default {
  widgets: [
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
                  buildHookId: '5f91e0b2985ea2134e008bd0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5affowb3',
                  apiId: 'c355fdff-e81f-4ea8-9ec9-64cf9217a7b9'
                },
                {
                  buildHookId: '5f91e0b3b20a6317ff1d57cd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w7bn4td4',
                  apiId: 'f4bbf6a7-e373-49e9-872b-679cc5c9fdcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adinap12/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w7bn4td4.netlify.app', category: 'apps'}
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
