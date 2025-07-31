

export class JobDetails {
    private joinedDate: string = '';
    private jobTitle: string = '';
    private jobCategory: string = '';
    private subUnit: string = '';
    private location: string = '';
    private employmentStatus: string = '';
    private jobSpecification: string = '';

    constructor(joinedDate: string,
        jobTitle: string, jobCategory: string,
        subUnit: string, location: string,
        employmentStatus: string, jobSpecification: string) {

        this.joinedDate = joinedDate;
        this.jobTitle = jobTitle;
        this.jobCategory = jobCategory;
        this.subUnit = subUnit;
        this.location = location;
        this.employmentStatus = employmentStatus;
        this.jobSpecification = jobSpecification;
    }
    public getJoinedDate(): string {
        return this.joinedDate;
    }

    public setJoinedDate(value: string): void {
        this.joinedDate = value;
    }

    public getJobTitle(): string {
        return this.jobTitle;
    }

    public setJobTitle(value: string): void {
        this.jobTitle = value;
    }

    public getJobCategory(): string {
        return this.jobCategory;
    }

    public setJobCategory(value: string): void {
        this.jobCategory = value;
    }

    public getSubUnit(): string {
        return this.subUnit;
    }

    public setSubUnit(value: string): void {
        this.subUnit = value;
    }

    public getLocation(): string {
        return this.location;
    }

    public setLocation(value: string): void {
        this.location = value;
    }

    public getEmploymentStatus(): string {
        return this.employmentStatus;
    }

    public setEmploymentStatus(value: string): void {
        this.employmentStatus = value;
    }

    public getJobSpecification(): string {
        return this.jobSpecification;
    }

    public setJobSpecification(value: string): void {
        this.jobSpecification = value;
    }
    
}