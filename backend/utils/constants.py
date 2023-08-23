class VerificationStatus:
    PENDING = 1
    APPROVED = 2
    REJECTED = 3
    IN_PROGRESS = 4

    VERIFICATION_STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (APPROVED, 'Approved'),
        (REJECTED, 'Rejected'),
        (IN_PROGRESS, 'In Progress'),
    )


