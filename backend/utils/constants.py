class BlogConstants:
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
class ProjectConstants:
    AR_VR_DEV = 1
    ML = 2
    ROBOTICS = 3

    VERTICAL_CHOICES = (
        ( ML , "Ml"),
        (AR_VR_DEV , "AR/VR AND DEV "),
        (ROBOTICS,"Robotics")
    )


