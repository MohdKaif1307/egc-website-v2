# Admin Login Credentials

## Production Login Credentials

### Super Admin (Full Access)
- **Email:** `mohdkaif@egcworld.in`
- **Password:** `Admin@1307`
- **Role:** Super Admin
- **Permissions:** All (full system access)

### HR Admin (Limited Access)
- **Email:** `hr@egc.com`
- **Password:** `hr123`
- **Role:** HR Admin
- **Permissions:** Employee management, invite codes

## How to Login

1. Go to your website: `https://your-domain.vercel.app/login`
2. Enter the email and password above
3. Click "Sign in"
4. You'll be redirected to the admin dashboard

## Environment Variables (Optional)

For better security, you can set these environment variables in Vercel:

```
ADMIN_EMAIL=mohdkaif@egcworld.in
ADMIN_PASSWORD=Admin@1307
JWT_SECRET=your-secure-jwt-secret
```

## Security Notes

- In a real production environment, passwords should be hashed
- Consider implementing 2FA for admin accounts
- Store credentials in environment variables, not in code
- Use a proper database instead of hardcoded values

## Employee Credentials (for testing)

- **Pranchal:** `Pranchal@egcworld.in` / `Pranchal@123`
- **Sarika:** `Sarika@egcworld.in` / `Sarika@123`
