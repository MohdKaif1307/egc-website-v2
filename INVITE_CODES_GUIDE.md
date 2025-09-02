# Employee Invite Code System

## Overview
The EGC website now includes a comprehensive invite code system that allows administrators to generate secure codes for new employee registration.

## How It Works

### For Administrators

1. **Access the Admin Panel**
   - Log in with admin credentials (`admin@egc.com` / `admin123`)
   - Go to Admin Dashboard → Employee Invites

2. **Generate Invite Codes**
   - Click "Generate New Code"
   - Configure the code settings:
     - **Department**: Optional department assignment
     - **Role**: Employee or Admin
     - **Max Uses**: How many people can use this code (1-100)
     - **Expiry**: How many days the code is valid (1-365)
     - **Notes**: Internal notes for tracking

3. **Share Invite Codes**
   - Copy the generated code to clipboard
   - Share with new employees via email, Slack, or other secure channels
   - Track usage in the admin panel

4. **Manage Codes**
   - View all codes with their status (Active, Used, Expired)
   - See usage statistics
   - Deactivate codes if needed

### For New Employees

1. **Get Your Invite Code**
   - Receive invite code from HR or your manager
   - Example codes: `EGC-WELCOME-2024`, `EGC-LT123ABC-XYZ789`

2. **Register Your Account**
   - Go to the website and click "Employee Login"
   - Click "Create your account"
   - Enter the invite code in Step 1
   - Complete your profile in Step 2

3. **Welcome Experience**
   - After registration, you'll be taken through a welcome tour
   - Learn about your dashboard and available features
   - Start using your employee account

## Default Invite Codes

For testing and initial setup, these codes are pre-configured:

- `EGC-WELCOME-2024` - Multi-use welcome code (10 uses, 30 days)
- `NEW-EMPLOYEE-2024` - Batch registration code (5 uses, 7 days)
- `TEAM-JOIN-2024` - Marketing team code (1 use, 14 days)

## Security Features

- **Expiration**: All codes have expiration dates
- **Usage Limits**: Prevent unlimited registrations
- **Tracking**: Full audit trail of code usage
- **Role Assignment**: Automatic role and department assignment
- **Admin Only**: Only administrators can generate codes

## API Endpoints

### Admin Endpoints (Require Admin Token)

- `GET /api/admin/invite-codes` - List all invite codes
- `POST /api/admin/invite-codes` - Generate new invite code
- `DELETE /api/admin/invite-codes/[id]` - Deactivate invite code

### Registration Endpoint

- `POST /api/employee/register` - Register with invite code

## Best Practices

1. **Code Distribution**
   - Use secure channels to share codes
   - Don't share codes in public channels
   - Consider one-time use codes for sensitive roles

2. **Code Management**
   - Set appropriate expiration dates
   - Use descriptive notes for tracking
   - Regularly review and clean up old codes

3. **Department Assignment**
   - Pre-configure department and role in codes
   - Reduces manual setup for new employees
   - Ensures consistent role assignment

## Troubleshooting

### Common Issues

**"Invalid invite code"**
- Check if the code is spelled correctly
- Verify the code hasn't expired
- Ensure the code hasn't reached its usage limit

**"Code already used"**
- Single-use codes can only be used once
- Contact admin for a new code

**"Access denied to admin panel"**
- Only admin users can access invite code management
- Contact system administrator for access

### Contact Support

For technical issues or questions about the invite code system:
- Email: support@egc.com
- Admin Panel: Contact form in dashboard
- Internal: Reach out to IT department
