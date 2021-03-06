export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'fa fa-dashboard',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
            {
            path: 'dashboard',
            data: {
              menu: {
                title: 'Dashboard v1',
              }
            }
            },
            {
              path: 'dashboard2',
              data: {
                menu: {
                  title: 'Dashboard v2',
                }
              }
            }
          ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'Tables',
            icon: 'fa fa-table',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Account',
            icon: 'fa fa-desktop',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      }
    ]
  }
];
