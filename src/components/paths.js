import documentation from "../documentation";

export const urls = {
    AppSinglePage: id => `/apps/${id}`,
    NotificationSinglePage: id => `/notifications/${id}`
}

export default {
    BoardPage: '/',
    AppPage: '/apps/:id(\\d+)',
    NewAppPage: '/apps/new',
    AppsPage: '/apps',
    AppsBuyerPage: '/apps-buyer',
    AppsTenantPage: '/app-tenant',
    AccountsPage: '/accounts',
    StreamsPage: '/streams',
    DomainsPage: '/domains',
    LogsPage: '/logs',
    NotificationsPage: '/notifications',
    NotificationSinglePage: '/notifications/:id(\\d+)',
    NotificationNewPage: '/notifications/new',
    GroupsPage: '/groups',
    SmartNotificationsPage: '/smart-notifications',
    UsersPage: '/users',
    LoginPage: '/login',
    DocumentationPage: '/documentation',
    ProfilePage: '/me',
}