import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [
    `
    button[disabled] {
      background-color: rgb(71 81 105);
      color: rgb(24 24 27);
      cursor: default;
    }
    button[disabled].current {
      color: rgb(244 244 245);
      font-weight: bold;
    }
    `
  ]
})
export class PaginationComponent {
  @Input() description = '';
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() visibleRangeLength: number = 5;

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();

  visiblePages: number[] = [];
  pageSize: number = 10;

  pageSizes: PaginatorSize[] = [
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: '50', value: 50 },
    { text: '100', value: 100 }
  ];

  ngOnInit(): void {
    this.currentPage = 0;
    this.totalPages = 0;
    this.updateVisiblePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['currentPage'] && changes['currentPage'].currentValue) ||
      (changes['totalPages'] && changes['totalPages'].currentValue) ||
      (changes['pageSize'] && changes['pageSize'].currentValue)
    ) {
      this.updateVisiblePages();
    }
  }

  onGoTo(page: number): void {
    this.currentPage = page;
    this.updateVisiblePages();
    this.goTo.emit(page);
  }

  onPageSizeChange(pageSize: string): void {
    this.currentPage = 1;
    this.pageSize = Number(pageSize);
    this.updateVisiblePages();
    this.pageSizeChange.emit(Number(pageSize));
  }

  updateVisiblePages(): void {
    if (this.currentPage <= 0 || this.totalPages <= 0) return;

    const length = Math.min(this.totalPages, this.visibleRangeLength);
    const startIndex = Math.max(
      Math.min(
        this.currentPage - Math.ceil(length / 2),
        this.totalPages - length
      ),
      0
    );

    this.visiblePages = Array.from(
      new Array(length).keys(),
      (item) => item + startIndex + 1
    );
  }

  get buttonPageClasses(): string {
    return 'flex items-center justify-center px-2 h-8 leading-tight bg-sky-700 hover:bg-sky-500 text-zinc-100 hover:text-zinc-900 border border-neutral-200 focus:ring-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition duration-75';
  }
}

type PaginatorSize = {
  text: string;
  value: number;
}
